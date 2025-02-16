import './assets/css/styles.css'
import Portfolio from './components/Portfolio/Portfolio'
import UberMich from './components/About/UberMich'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { ThemeProvider } from './context/ThemeContext'
import ThemeToggler from './components/Widgets/ThemeToggler'
import Sidebar from './components/Sidebar/Sidebar'

export type TThemeContext = {
  theme: string,
  setTheme: boolean;
}

function App() {

  return (
    <>
    <ThemeProvider>
        <ThemeToggler/>
        <main>
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
