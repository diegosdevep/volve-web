import { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { doc, onSnapshot, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { MapContainer, TileLayer, CircleMarker, Polyline, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// ── Types ────────────────────────────────────────────────────────

interface RoutePoint {
  latitude: number
  longitude: number
  timestamp: Timestamp
}

interface PersonOfInterest {
  fullName?: string
  photoURLs?: string[]
  description?: string
}

interface MeetingLocation {
  name?: string
  address?: string
  latitude?: number
  longitude?: number
}

interface SessionData {
  title: string
  status: 'upcoming' | 'active' | 'disarmed' | 'triggered' | 'panicButton'
  isLiveTracking?: boolean
  routePoints?: RoutePoint[]
  scheduledEnd: Timestamp
  scheduledStart?: Timestamp
  triggeredAt?: Timestamp
  personsOfInterest?: PersonOfInterest[]
  locations?: MeetingLocation[]
}

// ── Helpers ──────────────────────────────────────────────────────

function haversineKm(a: [number, number], b: [number, number]): number {
  const R = 6371
  const dLat = ((b[0] - a[0]) * Math.PI) / 180
  const dLon = ((b[1] - a[1]) * Math.PI) / 180
  const lat1 = (a[0] * Math.PI) / 180
  const lat2 = (b[0] * Math.PI) / 180
  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x))
}

function totalDistanceKm(points: [number, number][]): number {
  let d = 0
  for (let i = 1; i < points.length; i++) d += haversineKm(points[i - 1], points[i])
  return d
}

function formatDist(km: number): string {
  if (km < 1) return `${Math.round(km * 1000)} m`
  return `${km.toFixed(1)} km`
}

function formatAlertTime(ts: { toDate(): Date }): string {
  const d = ts.toDate()
  return d.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })
}

function formatAlertDate(ts: { toDate(): Date }): string {
  const d = ts.toDate()
  const today = new Date()
  const isToday =
    d.getDate() === today.getDate() &&
    d.getMonth() === today.getMonth() &&
    d.getFullYear() === today.getFullYear()
  if (isToday) return 'Hoy'
  return d.toLocaleDateString('es-AR', { day: 'numeric', month: 'short' })
}

// ── Map auto-pan ─────────────────────────────────────────────────

function MapController({ center }: { center: [number, number] }) {
  const map = useMap()
  useEffect(() => {
    map.flyTo(center, map.getZoom(), { animate: true, duration: 1.2 })
  }, [center, map])
  return null
}

// ── Main component ───────────────────────────────────────────────

export default function TrackingPage() {
  const { userId, sessionId } = useParams<{ userId: string; sessionId: string }>()
  const [session, setSession] = useState<SessionData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)
  const [copied, setCopied] = useState(false)

  // Firestore real-time subscription
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
        const data = snap.data() as SessionData
        setSession(data)
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

  const copyLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }, [])

  // ── Loading state ──────────────────────────────────────────────
  if (loading) {
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', backgroundColor: '#F9FAFB',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}>
        <style>{`@keyframes _spin { to { transform: rotate(360deg) } }`}</style>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50%',
            border: '3px solid #7C6CFF', borderTopColor: 'transparent',
            margin: '0 auto 16px', animation: '_spin 0.8s linear infinite',
          }} />
          <p style={{ color: '#6B7280', fontSize: 14, margin: 0 }}>Cargando seguimiento en vivo...</p>
        </div>
      </div>
    )
  }

  // ── Error state ────────────────────────────────────────────────
  if (error || !session) {
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', backgroundColor: '#F9FAFB',
        padding: 24, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}>
        <div style={{ textAlign: 'center', maxWidth: 320 }}>
          <div style={{ fontSize: 52, marginBottom: 16 }}>🔍</div>
          <h1 style={{ fontSize: 20, fontWeight: 700, color: '#111827', margin: '0 0 8px' }}>
            Sesión no encontrada
          </h1>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.6, margin: 0 }}>
            {error ?? 'Esta sesión no existe o ya no está disponible.'}
          </p>
        </div>
      </div>
    )
  }

  // ── Derived state ──────────────────────────────────────────────
  const points: [number, number][] = (session.routePoints ?? []).map(
    (p) => [p.latitude, p.longitude]
  )
  const lastPoint = points.length > 0 ? points[points.length - 1] : null
  const isPanic = session.status === 'panicButton'
  const alertColor = isPanic ? '#991B1B' : '#DC2626'
  const alertColorMid = isPanic ? '#B91C1C' : '#EF4444'
  const alertLabel = isPanic ? '🆘 BOTÓN DE PÁNICO' : '🚨 ALERTA DE SEGURIDAD'

  const lastRoutePoint = session.routePoints?.at(-1)
  const minSinceUpdate = lastRoutePoint
    ? (Date.now() - lastRoutePoint.timestamp.toMillis()) / 60000
    : null
  const isStale = minSinceUpdate !== null && minSinceUpdate > 30
  const isLive = session.isLiveTracking !== false && !isStale

  const person = session.personsOfInterest?.[0]
  const personName = person?.fullName
  const personPhoto = person?.photoURLs?.[0]

  const distKm = points.length > 1 ? totalDistanceKm(points) : 0

  const waypoints = (session.locations ?? []).filter(
    (l): l is MeetingLocation & { latitude: number; longitude: number } =>
      typeof l.latitude === 'number' && typeof l.longitude === 'number'
  )

  const mapCenter: [number, number] = lastPoint ?? [-34.6037, -58.3816]

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      backgroundColor: '#fff',
    }}>

      {/* ── Global keyframes ──────────────────────────────────── */}
      <style>{`
        @keyframes _spin    { to { transform: rotate(360deg) } }
        @keyframes _blink   { 0%,100%{opacity:1} 50%{opacity:0.35} }
        @keyframes _ripple  { 0%{transform:scale(1);opacity:0.5} 100%{transform:scale(2.4);opacity:0} }
        .leaflet-container  { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
        .trk-stat-card:hover { transform: translateY(-1px); transition: transform 0.15s; }
      `}</style>

      {/* ── Header ────────────────────────────────────────────── */}
      <div style={{
        background: `linear-gradient(135deg, ${alertColor}, ${alertColorMid})`,
        color: '#fff', padding: '14px 20px',
        boxShadow: `0 4px 20px ${alertColor}55`,
        position: 'relative', zIndex: 10, flexShrink: 0,
      }}>
        <div style={{
          maxWidth: 960, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Alert type + live badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 5 }}>
              <span style={{ fontSize: 15, fontWeight: 800, letterSpacing: 0.4 }}>{alertLabel}</span>
              {isLive ? (
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  fontSize: 11, fontWeight: 700, letterSpacing: 0.5,
                  background: 'rgba(255,255,255,0.2)', padding: '3px 10px', borderRadius: 999,
                }}>
                  <span style={{
                    width: 7, height: 7, borderRadius: '50%', backgroundColor: '#fff',
                    animation: '_blink 1.2s ease-in-out infinite',
                    display: 'inline-block',
                  }} />
                  EN VIVO
                </span>
              ) : (
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  fontSize: 11, fontWeight: 700, letterSpacing: 0.5,
                  background: 'rgba(0,0,0,0.25)', padding: '3px 10px', borderRadius: 999,
                }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#9CA3AF', display: 'inline-block' }} />
                  DETENIDO
                </span>
              )}
            </div>

            {/* Session + person */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {personPhoto ? (
                <img
                  src={personPhoto} alt=""
                  style={{
                    width: 24, height: 24, borderRadius: '50%', objectFit: 'cover',
                    border: '2px solid rgba(255,255,255,0.6)', flexShrink: 0,
                  }}
                />
              ) : personName ? (
                <div style={{
                  width: 24, height: 24, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 700, flexShrink: 0,
                }}>
                  {personName.charAt(0).toUpperCase()}
                </div>
              ) : null}
              <span style={{
                fontSize: 13, color: 'rgba(255,255,255,0.85)',
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>
                {session.title}{personName && ` · con ${personName}`}
              </span>
            </div>
          </div>

          {/* Share button */}
          <button
            onClick={copyLink}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: '#fff', borderRadius: 9, padding: '8px 14px',
              cursor: 'pointer', fontSize: 12, fontWeight: 600,
              flexShrink: 0, transition: 'background 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.28)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
          >
            {copied ? '✓ Copiado' : '🔗 Compartir'}
          </button>
        </div>
      </div>

      {/* ── Map ───────────────────────────────────────────────── */}
      <div style={{ position: 'relative', height: '55vh', minHeight: 300, flexShrink: 0 }}>
        {lastPoint ? (
          <MapContainer
            center={mapCenter}
            zoom={15}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Route polyline */}
            {points.length > 1 && (
              <Polyline
                positions={points}
                color={alertColor}
                weight={4}
                opacity={0.8}
                dashArray={isLive ? undefined : '8, 5'}
              />
            )}

            {/* Start marker — green */}
            {points.length > 1 && (
              <CircleMarker
                center={points[0]}
                radius={7}
                fillColor="#16A34A"
                color="white"
                weight={2.5}
                fillOpacity={1}
              />
            )}

            {/* Waypoint markers — blue */}
            {waypoints.map((loc, i) => (
              <CircleMarker
                key={`wp-${i}`}
                center={[loc.latitude, loc.longitude]}
                radius={7}
                fillColor="#2563EB"
                color="white"
                weight={2.5}
                fillOpacity={0.9}
              />
            ))}

            {/* Ripple ring — only when live */}
            {isLive && (
              <CircleMarker
                center={lastPoint}
                radius={22}
                fillColor={alertColor}
                color={alertColor}
                weight={0}
                fillOpacity={0.15}
              />
            )}

            {/* Current position — main dot */}
            <CircleMarker
              center={lastPoint}
              radius={12}
              fillColor={alertColor}
              color="white"
              weight={3}
              fillOpacity={isLive ? 0.95 : 0.6}
            />

            <MapController center={lastPoint} />
          </MapContainer>
        ) : (
          <div style={{
            height: '100%', display: 'flex', alignItems: 'center',
            justifyContent: 'center', backgroundColor: '#F3F4F6',
          }}>
            <div style={{ textAlign: 'center', color: '#6B7280' }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>📍</div>
              <p style={{ fontSize: 15, fontWeight: 600, margin: '0 0 6px' }}>
                Esperando ubicación...
              </p>
              <p style={{ fontSize: 13, color: '#9CA3AF', margin: 0 }}>
                Aparecerá cuando el teléfono envíe las coordenadas.
              </p>
            </div>
          </div>
        )}

        {/* Map legend — bottom left overlay */}
        {lastPoint && (
          <div style={{
            position: 'absolute', bottom: 16, left: 16, zIndex: 1000,
            background: 'rgba(255,255,255,0.96)',
            borderRadius: 12, padding: '10px 14px',
            boxShadow: '0 2px 16px rgba(0,0,0,0.14)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {points.length > 1 && (
                <LegendRow color="#16A34A" label="Inicio del recorrido" />
              )}
              {waypoints.length > 0 && (
                <LegendRow color="#2563EB" label="Lugar de encuentro" />
              )}
              <LegendRow color={alertColor} label="Última posición conocida" pulse={isLive} />
            </div>
          </div>
        )}
      </div>

      {/* ── Stale/stopped banner ──────────────────────────────── */}
      {!isLive && lastPoint && (
        <div style={{
          background: '#1F2937', color: '#D1D5DB',
          textAlign: 'center', padding: '10px 20px', fontSize: 13,
          flexShrink: 0,
        }}>
          {isStale && minSinceUpdate !== null
            ? `⏱️ Sin actualizaciones hace ${Math.round(minSinceUpdate)} min. El dispositivo puede estar sin señal.`
            : '📍 El tracking finalizó. El mapa muestra la última posición conocida.'}
        </div>
      )}

      {/* ── Info panel ────────────────────────────────────────── */}
      <div style={{ backgroundColor: '#fff', borderTop: '1px solid #F3F4F6', flex: 1 }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '20px 16px 24px' }}>

          {/* ── Stats row ─────────────────────────────────────── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
            gap: 10, marginBottom: 20,
          }}>
            <StatCard
              label="Alerta disparada"
              value={formatAlertTime(session.triggeredAt ?? session.scheduledEnd)}
              sublabel={formatAlertDate(session.triggeredAt ?? session.scheduledEnd)}
              bg={`${alertColor}10`}
              border={`${alertColor}28`}
              color={alertColor}
            />
            <StatCard
              label="Puntos GPS"
              value={String(session.routePoints?.length ?? 0)}
              bg="#F5F3FF"
              border="#DDD6FE"
              color="#7C6CFF"
            />
            {points.length > 1 && (
              <StatCard
                label="Distancia"
                value={formatDist(distKm)}
                bg="#F0FDF4"
                border="#BBF7D0"
                color="#16A34A"
              />
            )}
            {lastUpdate && (
              <StatCard
                label="Actualizado"
                value={lastUpdate.toLocaleTimeString('es-AR', {
                  hour: '2-digit', minute: '2-digit', second: '2-digit',
                })}
                bg="#F9FAFB"
                border="#E5E7EB"
                color="#374151"
                small
              />
            )}
          </div>

          {/* ── Person + locations + actions ──────────────────── */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>

            {/* Person card */}
            {personName && (
              <div style={{
                flex: '1 1 200px', background: '#FAFAFA', borderRadius: 14,
                padding: '14px 16px', border: '1px solid #E5E7EB',
                display: 'flex', alignItems: 'center', gap: 14,
              }}>
                {personPhoto ? (
                  <img
                    src={personPhoto} alt=""
                    style={{
                      width: 52, height: 52, borderRadius: '50%', objectFit: 'cover',
                      border: `2.5px solid ${alertColor}`, flexShrink: 0,
                    }}
                  />
                ) : (
                  <div style={{
                    width: 52, height: 52, borderRadius: '50%',
                    background: `linear-gradient(135deg, ${alertColor}, ${alertColorMid})`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22, fontWeight: 700, color: '#fff', flexShrink: 0,
                  }}>
                    {personName.charAt(0).toUpperCase()}
                  </div>
                )}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 11, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: 0.8, margin: '0 0 3px' }}>
                    Persona de interés
                  </p>
                  <p style={{
                    fontSize: 15, fontWeight: 700, color: '#111827', margin: '0 0 2px',
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>
                    {personName}
                  </p>
                  {person?.description && (
                    <p style={{
                      fontSize: 12, color: '#6B7280', margin: 0,
                      overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    }}>
                      {person.description}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Meeting locations card */}
            {waypoints.length > 0 && (
              <div style={{
                flex: '1 1 200px', background: '#EFF6FF', borderRadius: 14,
                padding: '14px 16px', border: '1px solid #BFDBFE',
              }}>
                <p style={{ fontSize: 11, color: '#6B7280', textTransform: 'uppercase', letterSpacing: 0.8, margin: '0 0 10px' }}>
                  Lugares de encuentro
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {waypoints.slice(0, 3).map((loc, i) => (
                    <a
                      key={i}
                      href={`https://www.google.com/maps?q=${loc.latitude},${loc.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'flex-start', gap: 8, textDecoration: 'none' }}
                    >
                      <span style={{ fontSize: 14, flexShrink: 0, marginTop: 1 }}>📍</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        {loc.name && (
                          <p style={{ fontSize: 13, fontWeight: 600, color: '#1D4ED8', margin: '0 0 1px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {loc.name}
                          </p>
                        )}
                        {loc.address && (
                          <p style={{ fontSize: 11, color: '#6B7280', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {loc.address}
                          </p>
                        )}
                      </div>
                      <span style={{ fontSize: 11, color: '#3B82F6', flexShrink: 0 }}>↗</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            {lastPoint && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: '0 0 auto' }}>
                <a
                  href={`https://www.google.com/maps?q=${lastPoint[0]},${lastPoint[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center',
                    background: '#7C6CFF', color: '#fff', borderRadius: 12,
                    padding: '13px 18px', textDecoration: 'none',
                    fontSize: 13, fontWeight: 600,
                    boxShadow: '0 3px 10px rgba(124,108,255,0.35)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  🗺️ Abrir en Google Maps
                </a>
                <a
                  href={`https://waze.com/ul?ll=${lastPoint[0]},${lastPoint[1]}&navigate=yes`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center',
                    background: '#fff', color: '#374151', borderRadius: 12,
                    padding: '13px 18px', textDecoration: 'none',
                    fontSize: 13, fontWeight: 600,
                    border: '1px solid #E5E7EB',
                    whiteSpace: 'nowrap',
                  }}
                >
                  🚗 Navegar con Waze
                </a>
              </div>
            )}
          </div>

          {/* ── Route timeline ────────────────────────────────── */}
          {session.routePoints && session.routePoints.length > 0 && (
            <div>
              <p style={{
                fontSize: 12, color: '#9CA3AF', textTransform: 'uppercase',
                letterSpacing: 0.8, margin: '0 0 10px',
              }}>
                Últimas posiciones registradas
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[...session.routePoints].reverse().slice(0, 6).map((pt, i) => {
                  const ts = pt.timestamp.toDate()
                  const isFirst = i === 0
                  return (
                    <a
                      key={i}
                      href={`https://www.google.com/maps?q=${pt.latitude},${pt.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', gap: 12,
                        padding: '9px 12px', borderRadius: 10, textDecoration: 'none',
                        background: isFirst ? `${alertColor}0C` : 'transparent',
                        border: isFirst ? `1px solid ${alertColor}20` : '1px solid transparent',
                        transition: 'background 0.1s',
                      }}
                      onMouseEnter={e => { if (!isFirst) e.currentTarget.style.background = '#F9FAFB' }}
                      onMouseLeave={e => { if (!isFirst) e.currentTarget.style.background = 'transparent' }}
                    >
                      <div style={{
                        width: 8, height: 8, borderRadius: '50%', flexShrink: 0,
                        background: isFirst ? alertColor : '#D1D5DB',
                      }} />
                      <span style={{
                        fontSize: 12, color: '#374151',
                        fontVariantNumeric: 'tabular-nums', minWidth: 64, flexShrink: 0,
                      }}>
                        {ts.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                      </span>
                      <span style={{ fontSize: 12, color: '#9CA3AF', fontFamily: 'monospace', flex: 1 }}>
                        {pt.latitude.toFixed(5)}, {pt.longitude.toFixed(5)}
                      </span>
                      {isFirst ? (
                        <span style={{ fontSize: 11, color: alertColor, fontWeight: 700, flexShrink: 0 }}>
                          AHORA ↗
                        </span>
                      ) : (
                        <span style={{ fontSize: 11, color: '#9CA3AF', flexShrink: 0 }}>↗</span>
                      )}
                    </a>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Emergency footer ──────────────────────────────────── */}
      <div style={{
        background: '#111827', padding: '14px 20px',
        textAlign: 'center', flexShrink: 0,
      }}>
        <p style={{ fontSize: 13, color: '#9CA3AF', margin: 0 }}>
          Emergencias:{' '}
          <a href="tel:911" style={{ color: '#fff', fontWeight: 700, textDecoration: 'none' }}>911</a>
          <span style={{ color: '#374151', margin: '0 8px' }}>·</span>
          <a href="tel:112" style={{ color: '#fff', fontWeight: 700, textDecoration: 'none' }}>112</a>
          <span style={{ color: '#374151', margin: '0 8px' }}>·</span>
          <span style={{ color: '#A78BFA', fontWeight: 600 }}>Volvé</span>
        </p>
      </div>
    </div>
  )
}

// ── Sub-components ───────────────────────────────────────────────

function StatCard({
  label, value, sublabel, bg, border, color, small = false,
}: {
  label: string
  value: string
  sublabel?: string
  bg: string
  border: string
  color: string
  small?: boolean
}) {
  return (
    <div
      className="trk-stat-card"
      style={{
        background: bg, borderRadius: 12, padding: '14px 12px',
        textAlign: 'center', border: `1px solid ${border}`,
      }}
    >
      <p style={{ fontSize: 11, color: '#6B7280', textTransform: 'uppercase', letterSpacing: 0.8, margin: '0 0 5px' }}>
        {label}
      </p>
      <p style={{
        fontSize: small ? 14 : 22, fontWeight: 700, color,
        margin: 0, fontVariantNumeric: 'tabular-nums',
        letterSpacing: small ? 0 : -0.5,
      }}>
        {value}
      </p>
      {sublabel && (
        <p style={{ fontSize: 11, color: '#9CA3AF', margin: '3px 0 0' }}>{sublabel}</p>
      )}
    </div>
  )
}

function LegendRow({
  color, label, pulse = false,
}: {
  color: string
  label: string
  pulse?: boolean
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12 }}>
      <span style={{
        width: 10, height: 10, borderRadius: '50%',
        background: color, display: 'inline-block',
        border: '1.5px solid white',
        boxShadow: `0 0 0 1px ${color}`,
        animation: pulse ? '_blink 1.4s ease-in-out infinite' : 'none',
      }} />
      <span style={{ color: '#374151', fontWeight: 500 }}>{label}</span>
    </div>
  )
}
