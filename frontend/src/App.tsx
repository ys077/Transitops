import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { Dashboard } from './pages/Dashboard'
import { Vehicles } from './pages/Vehicles'
import { Drivers } from './pages/Drivers'
import { Trips } from './pages/Trips'
import { Maintenance } from './pages/Maintenance'
import { Reports } from './pages/Reports'
import { Login } from './pages/Login'
import { PlaceholderPage } from './pages/PlaceholderPage'
import { useAuthStore } from './store/authStore'
import './index.css'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

function App() {
  return (
    <BrowserRouter>
      <div className="dark min-h-screen bg-background text-foreground"> {/* Enforce dark mode by default for premium look */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/reports" element={<Reports />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
