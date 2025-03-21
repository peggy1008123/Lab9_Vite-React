import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Logo from './assets/logo.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://peggy1008123.github.io/" target="_blank">
          <img src={Logo} className="logo" alt="Pei logo" />
        </a>
      </div>
      <h1>Thanks for your guidance!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
        Click until you're bored {count}
        </button>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
