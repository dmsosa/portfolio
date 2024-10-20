import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/css/styles.css'
import HeroBg from './components/HeroBg'
import Portfolio from './components/Portfolio/Portfolio'
import UberMich from './components/UberMich'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="navbar">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <HeroBg />
      <Portfolio />
      <UberMich />
      <div className="social">
        <button onClick={() => setCount((count) => count + 1)}>
          Anzahl  {count} ist!
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="kontakt">
        <button onClick={() => setCount((count) => count + 1)}>
          Anzahl  {count} ist!
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="footer">
        <button onClick={() => setCount((count) => count + 1)}>
          Anzahl  {count} ist!
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
