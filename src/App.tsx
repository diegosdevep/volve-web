import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Status from './pages/Status'
import Empresas from './pages/Empresas'
import TrackingPage from './pages/TrackingPage'

// Smooth-scroll to #hash on every navigation. The browser doesn't do this
// automatically with history.pushState (the SPA case), so anchors like
// `<Link to="/#features">` from /empresas need help to land on the section.
function ScrollToHash() {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    if (!hash) return
    const id = decodeURIComponent(hash.slice(1))
    // Wait one frame so the destination route's DOM is mounted.
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 60)
    return () => window.clearTimeout(t)
  }, [hash, pathname])
  return null
}

function Layout() {
  const location = useLocation()
  const isTracking = location.pathname.startsWith('/track/')

  return (
    <>
      <ScrollToHash />
      {!isTracking && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/status" element={<Status />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/track/:userId/:sessionId" element={<TrackingPage />} />
      </Routes>
      {!isTracking && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
