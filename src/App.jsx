import { useState } from 'react'
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Register/>
      <Login/> */}
      <Home />
    </>
  )
}

export default App
