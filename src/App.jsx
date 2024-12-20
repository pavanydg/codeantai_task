import { useState } from 'react'
import './App.css'
import SignInPage from './pages/SignInPage'
import SignIn from './components/SignIn'
import { DashBoard } from './pages/DashBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <SignInPage/> */}
        <DashBoard/>
    </>
  )
}

export default App
