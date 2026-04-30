import { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { doc, onSnapshot, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { MapContainer, TileLayer, CircleMarker, Polyline, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import logoUrl from '../assets/logo.svg'

// Volvé brand palette mirrored from the iOS app's design tokens.
// Leaflet props (color, fillColor) are forwarded as raw SVG attributes and
// don't resolve CSS variables, so the map needs literal hex values.
const VOLVE = {
  violet: '#6E6BB3',
  violetStrong: '#5C5A99',
  lavender: '#C8C6F2',
  coral: '#E67E73',
  sage: '#A8C3A0',
  amber: '#F59E0B',
  graphite: '#2E2E38',
  textSecondary: '#8E8E97',
  border: '#E1DFF0',
  cardBg: '#FFFFFF',
  offWhite: '#F7F7FA',
  pageBg: '#F2F2F7',
} as const

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
  encodedPolyline?: string
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

// Google encoded polyline algorithm — decodes the string returned by
// Directions API (routes[0].overview_polyline.points) into [lat, lng] pairs.
function decodePolyline(encoded: string): [number, number][] {
  const points: [number, number][] = []
  let index = 0
  let lat = 0
  let lng = 0
  while (index < encoded.length) {
    let b: number
    let shift = 0
    let result = 0
    do {
      b = encoded.charCodeAt(index++) - 63
      result |= (b & 0x1f) << shift
      shift += 5
    } while (b >= 0x20)
    lat += (result & 1) !== 0 ? ~(result >> 1) : result >> 1
    shift = 0
    result = 0
    do {
      b = encoded.charCodeAt(index++) - 63
      result |= (b & 0x1f) << shift
      shift += 5
    } while (b >= 0x20)
    lng += (result & 1) !== 0 ? ~(result >> 1) : result >> 1
    points.push([lat / 1e5, lng / 1e5])
  }
  return points
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
        justifyContent: 'center', backgroundColor: VOLVE.pageBg,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}>
        <style>{`@keyframes _spin { to { transform: rotate(360deg) } }`}</style>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50%',
            border: `3px solid ${VOLVE.violet}`, borderTopColor: 'transparent',
            margin: '0 auto 16px', animation: '_spin 0.8s linear infinite',
          }} />
          <p style={{ color: VOLVE.textSecondary, fontSize: 14, margin: 0 }}>Cargando seguimiento en vivo...</p>
        </div>
      </div>
    )
  }

  // ── Error state ────────────────────────────────────────────────
  if (error || !session) {
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', backgroundColor: VOLVE.pageBg,
        padding: 24,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}>
        <div style={{
          textAlign: 'center', maxWidth: 360,
          background: VOLVE.cardBg, borderRadius: 16, padding: '32px 24px',
          border: `1px solid ${VOLVE.border}`,
          boxShadow: '0 12px 32px rgba(110,107,179,0.08)',
        }}>
          <img src={logoUrl} alt="" style={{ width: 56, height: 'auto', marginBottom: 20, opacity: 0.9 }} />
          <h1 style={{ fontSize: 20, fontWeight: 700, color: VOLVE.graphite, margin: '0 0 8px' }}>
            Sesión no encontrada
          </h1>
          <p style={{ fontSize: 14, color: VOLVE.textSecondary, lineHeight: 1.6, margin: 0 }}>
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
  // Path drawn on the map: prefer the street-snapped polyline computed by
  // Cloud Functions via Directions API; fall back to raw GPS points when the
  // backend hasn't produced one yet (older sessions, very first updates, or
  // Directions errors).
  const snappedPath = session.encodedPolyline
    ? decodePolyline(session.encodedPolyline)
    : null
  const routePath: [number, number][] =
    snappedPath && snappedPath.length > 1 ? snappedPath : points
  const lastPoint = points.length > 0 ? points[points.length - 1] : null
  const isPanic = session.status === 'panicButton'
  const severityColor = VOLVE.coral
  const brandColor = VOLVE.violet
  const alertLabel = isPanic ? '🆘 Botón de pánico' : '🚨 Alerta de seguridad'

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
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      backgroundColor: VOLVE.pageBg,
      color: VOLVE.graphite,
    }}>

      {/* ── Global keyframes ──────────────────────────────────── */}
      <style>{`
        @keyframes _spin    { to { transform: rotate(360deg) } }
        @keyframes _blink   { 0%,100%{opacity:1} 50%{opacity:0.35} }
        @keyframes _ripple  { 0%{transform:scale(1);opacity:0.5} 100%{transform:scale(2.4);opacity:0} }
        .leaflet-container  { font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
        .trk-stat-card:hover { transform: translateY(-1px); transition: transform 0.15s; }
      `}</style>

      {/* ── Header ────────────────────────────────────────────── */}
      <div style={{
        background: VOLVE.cardBg,
        color: VOLVE.graphite,
        padding: '14px 20px',
        borderBottom: `1px solid ${VOLVE.border}`,
        boxShadow: '0 4px 16px rgba(110,107,179,0.06)',
        position: 'relative', zIndex: 10, flexShrink: 0,
      }}>
        <div style={{
          maxWidth: 960, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1, minWidth: 0 }}>
            {/* Brand mark */}
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: 'rgba(110,107,179,0.10)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <img src={logoUrl} alt="Volvé" style={{ width: 24, height: 'auto' }} />
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Alert type + live badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 3 }}>
                <span style={{
                  fontSize: 13, fontWeight: 700, letterSpacing: 0.2,
                  color: severityColor,
                  textTransform: 'uppercase',
                }}>{alertLabel}</span>
                {isLive ? (
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    fontSize: 10, fontWeight: 700, letterSpacing: 0.5,
                    background: 'rgba(168,195,160,0.22)', color: '#4F7A4A',
                    padding: '3px 9px', borderRadius: 999,
                    textTransform: 'uppercase',
                  }}>
                    <span style={{
                      width: 6, height: 6, borderRadius: '50%', backgroundColor: VOLVE.sage,
                      animation: '_blink 1.2s ease-in-out infinite',
                      display: 'inline-block',
                    }} />
                    En vivo
                  </span>
                ) : (
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    fontSize: 10, fontWeight: 700, letterSpacing: 0.5,
                    background: VOLVE.offWhite, color: VOLVE.textSecondary,
                    border: `1px solid ${VOLVE.border}`,
                    padding: '3px 9px', borderRadius: 999,
                    textTransform: 'uppercase',
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: VOLVE.textSecondary, display: 'inline-block' }} />
                    Detenido
                  </span>
                )}
              </div>

              {/* Session + person */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {personPhoto ? (
                  <img
                    src={personPhoto} alt=""
                    style={{
                      width: 22, height: 22, borderRadius: '50%', objectFit: 'cover',
                      border: `2px solid ${VOLVE.lavender}`, flexShrink: 0,
                    }}
                  />
                ) : personName ? (
                  <div style={{
                    width: 22, height: 22, borderRadius: '50%',
                    background: 'rgba(110,107,179,0.14)', color: VOLVE.violet,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 700, flexShrink: 0,
                  }}>
                    {personName.charAt(0).toUpperCase()}
                  </div>
                ) : null}
                <span style={{
                  fontSize: 14, fontWeight: 600, color: VOLVE.graphite,
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>
                  {session.title}
                  {personName && (
                    <span style={{ color: VOLVE.textSecondary, fontWeight: 400 }}>
                      {' · con '}{personName}
                    </span>
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Share button */}
          <button
            onClick={copyLink}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: VOLVE.violet,
              border: 'none',
              color: '#fff', borderRadius: 12, padding: '10px 16px',
              cursor: 'pointer', fontSize: 13, fontWeight: 600,
              flexShrink: 0, transition: 'background 0.15s, transform 0.1s',
              boxShadow: '0 4px 12px rgba(110,107,179,0.25)',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = VOLVE.violetStrong)}
            onMouseLeave={e => (e.currentTarget.style.background = VOLVE.violet)}
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
            {routePath.length > 1 && (
              <Polyline
                positions={routePath}
                color={brandColor}
                weight={5}
                opacity={0.85}
                dashArray={isLive ? undefined : '8, 5'}
              />
            )}

            {/* Start marker — sage */}
            {points.length > 1 && (
              <CircleMarker
                center={points[0]}
                radius={7}
                fillColor={VOLVE.sage}
                color="white"
                weight={2.5}
                fillOpacity={1}
              />
            )}

            {/* Waypoint markers — amber */}
            {waypoints.map((loc, i) => (
              <CircleMarker
                key={`wp-${i}`}
                center={[loc.latitude, loc.longitude]}
                radius={7}
                fillColor={VOLVE.amber}
                color="white"
                weight={2.5}
                fillOpacity={0.95}
              />
            ))}

            {/* Ripple ring — only when live (BrandPulseRing parity) */}
            {isLive && (
              <CircleMarker
                center={lastPoint}
                radius={22}
                fillColor={brandColor}
                color={brandColor}
                weight={0}
                fillOpacity={0.18}
              />
            )}

            {/* Current position — main dot */}
            <CircleMarker
              center={lastPoint}
              radius={12}
              fillColor={brandColor}
              color="white"
              weight={3}
              fillOpacity={isLive ? 0.95 : 0.6}
            />

            <MapController center={lastPoint} />
          </MapContainer>
        ) : (
          <div style={{
            height: '100%', display: 'flex', alignItems: 'center',
            justifyContent: 'center', backgroundColor: VOLVE.pageBg,
          }}>
            <div style={{ textAlign: 'center', color: VOLVE.textSecondary }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>📍</div>
              <p style={{ fontSize: 15, fontWeight: 600, color: VOLVE.graphite, margin: '0 0 6px' }}>
                Esperando ubicación...
              </p>
              <p style={{ fontSize: 13, color: VOLVE.textSecondary, margin: 0 }}>
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
            borderRadius: 16, padding: '12px 14px',
            border: `1px solid ${VOLVE.border}`,
            boxShadow: '0 12px 32px rgba(110,107,179,0.10)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {points.length > 1 && (
                <LegendRow color={VOLVE.sage} label="Inicio del recorrido" />
              )}
              {waypoints.length > 0 && (
                <LegendRow color={VOLVE.amber} label="Lugar de encuentro" />
              )}
              <LegendRow color={brandColor} label="Última posición conocida" pulse={isLive} />
            </div>
          </div>
        )}
      </div>

      {/* ── Stale/stopped banner ──────────────────────────────── */}
      {!isLive && lastPoint && (
        <div style={{
          background: VOLVE.graphite, color: '#E1DFF0',
          textAlign: 'center', padding: '10px 20px', fontSize: 13,
          fontWeight: 500,
          flexShrink: 0,
        }}>
          {isStale && minSinceUpdate !== null
            ? `⏱️ Sin actualizaciones hace ${Math.round(minSinceUpdate)} min. El dispositivo puede estar sin señal.`
            : '📍 El tracking finalizó. El mapa muestra la última posición conocida.'}
        </div>
      )}

      {/* ── Info panel ────────────────────────────────────────── */}
      <div style={{ backgroundColor: VOLVE.pageBg, borderTop: `1px solid ${VOLVE.border}`, flex: 1 }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '24px 16px 32px' }}>

          {/* ── Stats row ─────────────────────────────────────── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: 12, marginBottom: 24,
          }}>
            <StatCard
              label="Alerta disparada"
              value={formatAlertTime(session.triggeredAt ?? session.scheduledEnd)}
              sublabel={formatAlertDate(session.triggeredAt ?? session.scheduledEnd)}
              bg={VOLVE.cardBg}
              border={VOLVE.border}
              color={severityColor}
              accent={severityColor}
            />
            <StatCard
              label="Puntos GPS"
              value={String(session.routePoints?.length ?? 0)}
              bg={VOLVE.cardBg}
              border={VOLVE.border}
              color={VOLVE.violet}
              accent={VOLVE.violet}
            />
            {points.length > 1 && (
              <StatCard
                label="Distancia"
                value={formatDist(distKm)}
                bg={VOLVE.cardBg}
                border={VOLVE.border}
                color={'#4F7A4A'}
                accent={VOLVE.sage}
              />
            )}
            {lastUpdate && (
              <StatCard
                label="Actualizado"
                value={lastUpdate.toLocaleTimeString('es-AR', {
                  hour: '2-digit', minute: '2-digit', second: '2-digit',
                })}
                bg={VOLVE.cardBg}
                border={VOLVE.border}
                color={VOLVE.graphite}
                accent={VOLVE.textSecondary}
                small
              />
            )}
          </div>

          {/* ── Person + locations + actions ──────────────────── */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>

            {/* Person card */}
            {personName && (
              <div style={{
                flex: '1 1 200px', background: VOLVE.cardBg, borderRadius: 16,
                padding: '20px', border: `1px solid ${VOLVE.border}`,
                boxShadow: '0 4px 12px rgba(110,107,179,0.04)',
                display: 'flex', alignItems: 'center', gap: 14,
              }}>
                {personPhoto ? (
                  <img
                    src={personPhoto} alt=""
                    style={{
                      width: 52, height: 52, borderRadius: '50%', objectFit: 'cover',
                      border: `2.5px solid ${VOLVE.violet}`, flexShrink: 0,
                    }}
                  />
                ) : (
                  <div style={{
                    width: 52, height: 52, borderRadius: '50%',
                    background: `linear-gradient(135deg, ${VOLVE.violet}, ${VOLVE.lavender})`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22, fontWeight: 700, color: '#fff', flexShrink: 0,
                  }}>
                    {personName.charAt(0).toUpperCase()}
                  </div>
                )}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 11, color: VOLVE.textSecondary, textTransform: 'uppercase', letterSpacing: 0.8, fontWeight: 600, margin: '0 0 4px' }}>
                    Persona de interés
                  </p>
                  <p style={{
                    fontSize: 15, fontWeight: 700, color: VOLVE.graphite, margin: '0 0 2px',
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>
                    {personName}
                  </p>
                  {person?.description && (
                    <p style={{
                      fontSize: 12, color: VOLVE.textSecondary, margin: 0,
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
                flex: '1 1 200px', background: VOLVE.cardBg, borderRadius: 16,
                padding: '20px', border: `1px solid ${VOLVE.border}`,
                boxShadow: '0 4px 12px rgba(110,107,179,0.04)',
              }}>
                <p style={{ fontSize: 11, color: VOLVE.textSecondary, textTransform: 'uppercase', letterSpacing: 0.8, fontWeight: 600, margin: '0 0 12px' }}>
                  Lugares de encuentro
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {waypoints.slice(0, 3).map((loc, i) => (
                    <a
                      key={i}
                      href={`https://www.google.com/maps?q=${loc.latitude},${loc.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'flex-start', gap: 10, textDecoration: 'none' }}
                    >
                      <span style={{
                        width: 22, height: 22, borderRadius: '50%',
                        background: 'rgba(245,158,11,0.16)', color: VOLVE.amber,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 11, flexShrink: 0,
                      }}>📍</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        {loc.name && (
                          <p style={{ fontSize: 13, fontWeight: 600, color: VOLVE.graphite, margin: '0 0 1px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {loc.name}
                          </p>
                        )}
                        {loc.address && (
                          <p style={{ fontSize: 11, color: VOLVE.textSecondary, margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {loc.address}
                          </p>
                        )}
                      </div>
                      <span style={{ fontSize: 12, color: VOLVE.violet, flexShrink: 0, fontWeight: 600 }}>↗</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            {lastPoint && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: '0 0 auto' }}>
                <a
                  href={`https://www.google.com/maps?q=${lastPoint[0]},${lastPoint[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center',
                    background: VOLVE.violet, color: '#fff', borderRadius: 12,
                    padding: '12px 24px', textDecoration: 'none',
                    fontSize: 13, fontWeight: 600,
                    boxShadow: '0 4px 12px rgba(110,107,179,0.28)',
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
                    background: VOLVE.cardBg, color: VOLVE.graphite, borderRadius: 12,
                    padding: '12px 24px', textDecoration: 'none',
                    fontSize: 13, fontWeight: 600,
                    border: `1px solid ${VOLVE.border}`,
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
            <div style={{
              background: VOLVE.cardBg,
              border: `1px solid ${VOLVE.border}`,
              borderRadius: 16,
              padding: '20px',
              boxShadow: '0 4px 12px rgba(110,107,179,0.04)',
            }}>
              <p style={{
                fontSize: 11, color: VOLVE.textSecondary, textTransform: 'uppercase',
                letterSpacing: 0.8, fontWeight: 600, margin: '0 0 12px',
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
                        padding: '10px 12px', borderRadius: 10, textDecoration: 'none',
                        background: isFirst ? 'rgba(110,107,179,0.08)' : 'transparent',
                        border: isFirst ? `1px solid rgba(110,107,179,0.18)` : '1px solid transparent',
                        transition: 'background 0.1s',
                      }}
                      onMouseEnter={e => { if (!isFirst) e.currentTarget.style.background = VOLVE.offWhite }}
                      onMouseLeave={e => { if (!isFirst) e.currentTarget.style.background = 'transparent' }}
                    >
                      <div style={{
                        width: 8, height: 8, borderRadius: '50%', flexShrink: 0,
                        background: isFirst ? VOLVE.violet : VOLVE.border,
                      }} />
                      <span style={{
                        fontSize: 12, color: VOLVE.graphite, fontWeight: 500,
                        fontVariantNumeric: 'tabular-nums', minWidth: 64, flexShrink: 0,
                      }}>
                        {ts.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                      </span>
                      <span style={{ fontSize: 12, color: VOLVE.textSecondary, fontFamily: 'monospace', flex: 1 }}>
                        {pt.latitude.toFixed(5)}, {pt.longitude.toFixed(5)}
                      </span>
                      {isFirst ? (
                        <span style={{ fontSize: 11, color: VOLVE.violet, fontWeight: 700, flexShrink: 0, letterSpacing: 0.3 }}>
                          AHORA ↗
                        </span>
                      ) : (
                        <span style={{ fontSize: 11, color: VOLVE.textSecondary, flexShrink: 0 }}>↗</span>
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
        background: VOLVE.cardBg,
        borderTop: `1px solid ${VOLVE.border}`,
        padding: '20px',
        textAlign: 'center', flexShrink: 0,
      }}>
        <p style={{ fontSize: 13, color: VOLVE.textSecondary, margin: '0 0 10px' }}>
          Emergencias:{' '}
          <a href="tel:911" style={{ color: VOLVE.graphite, fontWeight: 700, textDecoration: 'none' }}>911</a>
          <span style={{ color: VOLVE.border, margin: '0 8px' }}>·</span>
          <a href="tel:112" style={{ color: VOLVE.graphite, fontWeight: 700, textDecoration: 'none' }}>112</a>
        </p>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
        }}>
          <img src={logoUrl} alt="" style={{ width: 18, height: 'auto', opacity: 0.9 }} />
          <span style={{ color: VOLVE.violet, fontWeight: 700, fontSize: 14, letterSpacing: -0.2 }}>Volvé</span>
          <span style={{ color: VOLVE.textSecondary, fontSize: 12 }}>· Tu seguridad, en tus manos</span>
        </div>
      </div>
    </div>
  )
}

// ── Sub-components ───────────────────────────────────────────────

function StatCard({
  label, value, sublabel, bg, border, color, accent, small = false,
}: {
  label: string
  value: string
  sublabel?: string
  bg: string
  border: string
  color: string
  accent?: string
  small?: boolean
}) {
  return (
    <div
      className="trk-stat-card"
      style={{
        background: bg, borderRadius: 16, padding: '16px 14px',
        textAlign: 'center', border: `1px solid ${border}`,
        boxShadow: '0 4px 12px rgba(110,107,179,0.04)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {accent && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: accent,
        }} />
      )}
      <p style={{ fontSize: 11, color: VOLVE.textSecondary, textTransform: 'uppercase', letterSpacing: 0.8, fontWeight: 600, margin: '4px 0 6px' }}>
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
        <p style={{ fontSize: 11, color: VOLVE.textSecondary, margin: '3px 0 0' }}>{sublabel}</p>
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
      <span style={{ color: VOLVE.graphite, fontWeight: 500 }}>{label}</span>
    </div>
  )
}
