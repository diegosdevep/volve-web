import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, onSnapshot, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { MapContainer, TileLayer, CircleMarker, Polyline, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// ── Types ──────────────────────────────────────────────────────

interface RoutePoint {
  latitude: number
  longitude: number
  timestamp: Timestamp
}

interface PersonOfInterest {
  fullName?: string
}

interface SessionData {
  title: string
  status: 'upcoming' | 'active' | 'disarmed' | 'triggered' | 'panicButton'
  isLiveTracking?: boolean
  routePoints?: RoutePoint[]
  scheduledEnd: Timestamp
  personsOfInterest?: PersonOfInterest[]
}

// ── Map auto-pan when location updates ────────────────────────

function MapController({ center }: { center: [number, number] }) {
  const map = useMap()
  useEffect(() => {
    map.flyTo(center, map.getZoom(), { animate: true, duration: 1.2 })
  }, [center, map])
  return null
}

// ── Main component ─────────────────────────────────────────────

export default function TrackingPage() {
  const { userId, sessionId } = useParams<{ userId: string; sessionId: string }>()
  const [session, setSession] = useState<SessionData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

  useEffect(() => {
    if (!userId || !sessionId) {
      setError('URL inválida')
      setLoading(false)
      return
    }

    const ref = doc(db, 'users', userId, 'sessions', sessionId)
    const unsub = onSnapshot(
      ref,
      (snap) => {
        if (!snap.exists()) {
          setError('Sesión no encontrada')
          setLoading(false)
          return
        }
        setSession(snap.data() as SessionData)
        setLastUpdate(new Date())
        setLoading(false)
      },
      () => {
        setError('No se puede acceder a esta sesión')
        setLoading(false)
      }
    )

    return () => unsub()
  }, [userId, sessionId])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div
            className="w-10 h-10 rounded-full border-2 border-t-transparent animate-spin mx-auto mb-4"
            style={{ borderColor: '#7C6CFF', borderTopColor: 'transparent' }}
          />
          <p className="text-gray-500 text-sm">Cargando tracking en vivo...</p>
        </div>
      </div>
    )
  }

  if (error || !session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="text-center max-w-sm">
          <div className="text-5xl mb-4">🔍</div>
          <h1 className="text-xl font-bold text-gray-900 mb-2">Sesión no encontrada</h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            {error ?? 'Esta sesión no existe o ya no está disponible.'}
          </p>
        </div>
      </div>
    )
  }

  const points: [number, number][] = (session.routePoints ?? []).map(
    (p) => [p.latitude, p.longitude]
  )
  const lastPoint = points.length > 0 ? points[points.length - 1] : null
  const isPanic = session.status === 'panicButton'
  const isLive = session.isLiveTracking !== false  // undefined = legacy sessions = assume live
  const alertColor = isPanic ? '#B91C1C' : '#DC2626'
  const alertLabel = isPanic ? '🆘 ALERTA DE PÁNICO' : '🚨 ALERTA DE SEGURIDAD'
  const personName = session.personsOfInterest?.[0]?.fullName

  return (
    <div className="min-h-screen flex flex-col">

      {/* ── Header ── */}
      <div className="text-white px-5 py-4" style={{ backgroundColor: alertColor }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-1 flex-wrap">
            <span className="text-base font-bold tracking-wide">{alertLabel}</span>
            {isLive ? (
              <span className="flex items-center gap-1.5 text-xs bg-white/20 px-2.5 py-0.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                En vivo
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-xs bg-black/30 px-2.5 py-0.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-gray-400" />
                Tracking detenido
              </span>
            )}
          </div>
          <p className="text-white/80 text-sm">
            {session.title}
            {personName && ` · con ${personName}`}
          </p>
          {lastUpdate && (
            <p className="text-white/50 text-xs mt-1">
              Actualizado: {lastUpdate.toLocaleTimeString('es-AR')}
            </p>
          )}
        </div>
      </div>

      {/* ── Map ── */}
      <div style={{ flex: 1, minHeight: '60vh' }}>
        {lastPoint ? (
          <MapContainer
            center={lastPoint}
            zoom={15}
            style={{ height: '100%', width: '100%', minHeight: '60vh' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Route line */}
            {points.length > 1 && (
              <Polyline positions={points} color="#7C6CFF" weight={3} opacity={0.8} />
            )}

            {/* Start marker — green */}
            {points.length > 1 && (
              <CircleMarker
                center={points[0]}
                radius={6}
                fillColor="#22C55E"
                color="white"
                weight={2}
                fillOpacity={1}
              />
            )}

            {/* Last known position — red */}
            <CircleMarker
              center={lastPoint}
              radius={11}
              fillColor={alertColor}
              color="white"
              weight={3}
              fillOpacity={0.95}
            />

            <MapController center={lastPoint} />
          </MapContainer>
        ) : (
          <div
            className="flex items-center justify-center bg-gray-100"
            style={{ minHeight: '60vh' }}
          >
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-3">📍</div>
              <p className="text-sm">Esperando datos de ubicación...</p>
              <p className="text-xs text-gray-400 mt-1">
                La ubicación aparecerá cuando el teléfono envíe coordenadas.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ── Tracking stopped banner ── */}
      {!isLive && (
        <div className="bg-gray-800 text-white px-5 py-3 text-center text-sm">
          <span className="text-gray-300">
            📍 El usuario dejó de compartir su ubicación en vivo.
            El mapa muestra la <strong>última posición conocida</strong>.
          </span>
        </div>
      )}

      {/* ── Stats bar ── */}
      <div className="bg-white border-t border-gray-100 px-5 py-4">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4 text-center">

          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
              Puntos GPS
            </p>
            <p className="text-2xl font-bold text-gray-900">
              {session.routePoints?.length ?? 0}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
              Estado
            </p>
            <p className="text-sm font-semibold" style={{ color: isLive ? alertColor : '#6B7280' }}>
              {isLive
                ? (isPanic ? 'Pánico · en vivo' : 'Alerta · en vivo')
                : 'Última ubicación conocida'}
            </p>
          </div>

          {lastPoint && (
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                Ubicación
              </p>
              <a
                href={`https://www.google.com/maps?q=${lastPoint[0]},${lastPoint[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium underline"
                style={{ color: '#7C6CFF' }}
              >
                Google Maps ↗
              </a>
            </div>
          )}
        </div>
      </div>

      {/* ── Emergency footer ── */}
      <div className="bg-gray-950 text-center px-6 py-3">
        <p className="text-gray-400 text-xs">
          Emergencias:{' '}
          <a href="tel:911" className="text-white font-semibold">911</a>
          {' · '}
          <a href="tel:112" className="text-white font-semibold">112</a>
          <span className="text-gray-600 mx-2">·</span>
          <span className="text-violet-400 font-medium">Volvé</span>
        </p>
      </div>
    </div>
  )
}
