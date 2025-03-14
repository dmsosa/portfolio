import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home.tsx';
import Artikel from './routes/Artikel.tsx';
import Dashboard from './routes/Dashboard.tsx';
import CV from './routes/CV.tsx';
import DashboardCards from './components/Dashboard/DashboardCards.tsx';


createRoot(document.getElementById('app')!).render(
  <StrictMode>
          
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route element={<DashboardCards />} index={true}></Route>
            <Route path='artikeln' element={<Artikel />}></Route>
            <Route path='cv' element={<CV/>}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
