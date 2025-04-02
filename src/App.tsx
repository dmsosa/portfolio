import './assets/css/styles.css'

import ThemeToggler from './components/Widgets/ThemeToggler'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { SidebarContextProvider } from './context/SidebarContext'
import { ThemeProvider } from './context/ThemeContext'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import { EndpunktContextProvider } from './context/EndpunktContext'
import { AuthContextProvider } from './context/AuthContext'


export type TThemeContext = {
  theme: string,
  setTheme: boolean;
}

function App() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const animate = (target: Element) => {
    gsap.fromTo(target, {
      transform: "translateY(100%) rotate(-10deg)",
      opacity: 0,
    }, {
      transform: "translateY(00%) rotate(00deg)",
      opacity: 1,
      duration: 0.5,
    });
  }
  useGSAP(() => {
      if (!sectionRef.current) return;
      gsap.registerPlugin(ScrollTrigger);
      gsap.set("h1 span", { transform: "translateY(100%) rotate(-10deg)",
        opacity: 0, })
      gsap.set(".description", { transform: "translateY(100%) rotate(-10deg)",
          opacity: 0, })
      gsap.utils.toArray("h1 span").forEach((title) => {
        const target = title as Element;
        ScrollTrigger.create({
          trigger: target,
          start: "top 60%",
          once: true,
          onEnter: () => {animate(target)}
        })
      });
      gsap.utils.toArray(".description").forEach((p) => {
        const target = p as Element;
        ScrollTrigger.create({
          trigger: target,
          start: "top 60%",
          once: true,
          onEnter: () => {animate(target)}
        })
      })

  }, { scope: sectionRef });

  return (
    <AuthContextProvider>
    <EndpunktContextProvider>
    <ThemeProvider>
    <SidebarContextProvider>
      <ThemeToggler/>
      <Header />
      <Outlet />
      {/* Footer */}
    </SidebarContextProvider>      
    </ThemeProvider>
    </EndpunktContextProvider>
    </AuthContextProvider>
    
      
  )
}

export default App
