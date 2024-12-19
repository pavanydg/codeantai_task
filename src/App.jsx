import { useState } from 'react'
import './App.css'
import SignInPage from './pages/SignInPage'
import SignIn from './components/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <SignInPage/>
    </>
  )
}

export default App
