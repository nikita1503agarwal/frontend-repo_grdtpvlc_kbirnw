import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from './components/Hero'

function Stat({ label, value }) {
  return (
    <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow border border-white/50">
      <div className="text-sm text-gray-600">{label}</div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
    </div>
  )
}

export default function App() {
  const [stats, setStats] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const token = localStorage.getItem('token')
        const res = await fetch(`${baseUrl}/dashboard/stats`, {
          headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {})
          }
        })
        if (!res.ok) throw new Error('Please login to view stats')
        const data = await res.json()
        setStats(data)
      } catch (e) {
        setError(e.message)
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Hero />

      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Manage Visitors, Passes & Appointments</h2>
          <p className="text-white/70">
            Role-based access for Admin, Security, Employees, and Visitors. Pre-register guests,
            issue QR-coded passes with a downloadable PDF badge, and scan for check-in/out.
          </p>

          <div className="flex gap-3">
            <Link to="/test" className="inline-flex px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-white/90 transition">Test Backend</Link>
          </div>

          {error && (
            <div className="mt-4 text-sm text-red-400 bg-red-950/40 border border-red-900 rounded p-3">
              {error}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Stat label="Visitors" value={stats ? stats.visitors : '—'} />
          <Stat label="Appointments" value={stats ? stats.appointments : '—'} />
          <Stat label="Active Passes" value={stats ? stats.active_passes : '—'} />
          <Stat label="Logs Today" value={stats ? stats.logs_today : '—'} />
        </div>
      </div>
    </div>
  )
}
