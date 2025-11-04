import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Signup from './pages/signup'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import ProtectedRoute from './component/protected=route'
import Navbar from './component/navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute >
              <Dashboard/>
            </ProtectedRoute>
          }
        />
        {/* <Route path="/login" element={<Login />} /> */}
      

</Routes>

    </>
  )
}

export default App
