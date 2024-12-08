import './assets/css/styles.css'
import HeroBg from './components/Hero/HeroBg'
import Portfolio from './components/Portfolio/Portfolio'
import UberMich from './components/About/UberMich'
import Social from './components/Kontakt/Social'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { ScrollProvider } from './context/SectionContext'
import { ThemeProvider } from './context/ThemeContext'
import ThemeToggler from './components/Widgets/ThemeToggler'

export type TThemeContext = {
  theme: string,
  setTheme: boolean;
}

function App() {

  return (
    <>
      <ScrollProvider>
          <ThemeProvider>

              <ThemeToggler/>
              <Header />
              <main>
                <HeroBg />      
                <Portfolio />
                <UberMich />
                <Social />
                <Footer />
              </main>
          </ThemeProvider>
      </ScrollProvider>
      
    </>
  )
}

export default App
