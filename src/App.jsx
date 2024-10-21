import { useState } from 'react'
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Register/>
      <Login/>
    </>
  )
}

export default App
