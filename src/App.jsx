import { useState } from 'react'
import './App.css'
import SignInPage from './pages/SignInPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <SignInPage/>
    </>
  )
}

export default App
