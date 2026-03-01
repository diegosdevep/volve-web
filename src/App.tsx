import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import TrackingPage from './pages/TrackingPage'

function Layout() {
  const location = useLocation()
  const isTracking = location.pathname.startsWith('/track/')

  return (
    <>
      {!isTracking && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
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
