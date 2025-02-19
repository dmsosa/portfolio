import './assets/css/styles.css'
import Portfolio from './components/Portfolio/Portfolio'
import UberMich from './components/About/UberMich'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { ThemeProvider } from './context/ThemeContext'
import ThemeToggler from './components/Widgets/ThemeToggler'
import Sidebar from './components/Sidebar/Sidebar'
import ReactLenis, { useLenis } from 'lenis/react'
import Lenis from 'lenis'
import { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export type TThemeContext = {
  theme: string,
  setTheme: boolean;
}

function App() {
  const lenis = new Lenis({autoRaf: true});
  const raf = (timestamp: number) => {
    lenis.raf(timestamp);
  }
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
    requestAnimationFrame(raf);
  }, [])
  return (
    <>
      <ThemeProvider>
          <ThemeToggler/>
          <main ref={sectionRef}>
            <Header />
            <Sidebar />
            <div className="content">
              <Portfolio />
              <UberMich />
              <Footer />
            </div>
          </main>
      </ThemeProvider>      
    </>
  )
}

export default App
