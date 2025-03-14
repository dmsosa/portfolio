import './assets/css/styles.css'

import ThemeToggler from './components/Widgets/ThemeToggler'
import {  useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import DashboardNav from './components/Dashboard/DashboardNav'
import DashboardNavMobile from './components/Dashboard/DashboardNavMobile'
import { DashboardContextProvider } from './context/DashboardContext'
import Lenis from 'lenis'
import AppContent from './AppContent'
import { ThemeProvider } from './context/ThemeContext'


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
  useEffect(() => {
    const lenis = new Lenis({autoRaf: true});

    const raf = (timestamp: number) => {
      lenis.raf(timestamp);
    }
    requestAnimationFrame(raf);
  }, [])
  return (

    <div className='app-inner theme-dark'>
      <ThemeProvider>
      <DashboardContextProvider>
          <ThemeToggler/>
          <DashboardNav/>
          <AppContent/>
          <DashboardNavMobile />
      </DashboardContextProvider>      
      </ThemeProvider>
    </div>
  )
}

export default App
