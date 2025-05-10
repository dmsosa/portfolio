import './assets/css/styles.css'

import ThemeToggler from './components/Widgets/Toggler/ThemeToggler'
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
import { FormContextProvider } from './context/FormContext'
import FormModal from './components/Forms/FormModal'


export type TThemeContext = {
  theme: string,
  setTheme: boolean;
}

function App() {
  const mainRef = useRef<HTMLDivElement>(null);


  useGSAP(() => {
    if (!mainRef.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.main-content',
        start: "center bottom",
        end: "bottom top",
        markers: true,
        onEnter: () => {
          console.log("enter")
        },
        onUpdate: () => {
          console.log("update")
        }
        
      },
    });
    tl.fromTo('.progress-bar', { 
      scaleX: 0, 
    }, 
    { 
      scaleX: 1,
    });
  }, { scope: mainRef });
 //form modal machen
 //es hat ein inner

  return (
    <div id="app-wrapper" className="app-wrapper">
      <AuthContextProvider>
      <ThemeProvider>
      <EndpunktContextProvider>
      <SidebarContextProvider>
      <FormContextProvider>
        <ThemeToggler/>
        <SidebarNav/>
        <NavMobile />
        <FormModal />
        <main ref={mainRef}>
          <Header />
          <div className="main-content"> {/*Displayed als grid*/}
              <Outlet />
          </div>
          <Footer />
        </main>
      </FormContextProvider>
      </SidebarContextProvider>      
      </EndpunktContextProvider>
      </ThemeProvider>
      </AuthContextProvider>
    </div>
    
    
      
  )
}

export default App
