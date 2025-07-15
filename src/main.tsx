import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './assets/css/styles.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home.tsx';
import Artikel from './routes/Artikel.tsx';
import Dashboard from './routes/Dashboard.tsx';
import CV from './routes/CV.tsx';
import Profile from './routes/Profile.tsx';
import NotFound from './routes/NotFound.tsx';
import ArtikelEditor from './routes/ArtikelEditor.tsx';
import Settings from './routes/Settings.tsx';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path='/' element={<Home />} index={true}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/artikel/:slug' element={<Artikel />}></Route>
          <Route path='/profile/:username' element={<Profile />}></Route>
          <Route path='/cv' element={<CV />}></Route>
          <Route path='/editor' element={<ArtikelEditor />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
