import './assets/css/styles.css'

import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import useDashboardContext, {TDashboardContext } from './context/DashboardContext'
import { useEffect } from 'react'


export type TThemeContext = {
  theme: string,
  setTheme: boolean;
}

function AppContent() {

  const { navWidth } = useDashboardContext() as TDashboardContext;

  useEffect(() => {

    const app = document.getElementById("appContent")  as HTMLDivElement;
    app.style.setProperty('--app-content-width', `${app.offsetWidth - navWidth}px`);

  }, [navWidth])
  return (
        <div id='appContent'>
            <Header/>
            <main>
            <Outlet/>
            </main>
        </div>
  )
}

export default AppContent;
