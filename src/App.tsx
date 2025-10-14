
import { useRef } from 'react'
import { SidebarContextProvider } from './context/SidebarContext'
import { ThemeProvider } from './context/ThemeContext'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import { EndpunktContextProvider } from './context/EndpunktContext'
import { AuthContextProvider } from './context/AuthContext'
import SidebarNav from './components/Nav/SidebarNav'
import NavMobile from './components/Nav/NavMobile'
import Footer from './components/Footer/Footer'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Home from './routes/Home'


export type TThemeContext = {
  theme: string,
  setTheme: boolean;
}

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  return (
      <ThemeProvider>
        <Header />
        <main ref={mainRef}>
          <div id="main-content" className="main-content"> {/*Displayed als grid*/}
            <Home/>
          </div>
        </main>
        <Footer />
      </ThemeProvider>
  )
}

export default App;