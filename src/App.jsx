import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'

import Dashboard from './pages/dashboard'

import Navbar from './component/navbar'
import Admin from './pages/AdminDashboard'
import ProtectedRoute from './component/protected=route'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly={true}>
              <Admin/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
