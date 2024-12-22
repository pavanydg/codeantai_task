import { useState } from 'react'
import './App.css'
import SignInPage from './pages/SignInPage'
import SignIn from './components/SignIn'
import { DashBoard } from './pages/DashBoard'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
        <Route path='/' element={<SignInPage/>} />
        <Route path='/dashboard' element={<DashBoard/>} />
    </Routes>
  )
}

export default App
