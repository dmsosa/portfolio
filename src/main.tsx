import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home.tsx';
import Artikel from './routes/Artikel.tsx';
import Dashboard from './routes/Dashboard.tsx';
import CV from './routes/CV.tsx';
import Profile from './routes/Profile.tsx';
import NotFound from './routes/NotFound.tsx';
import ArtikelEditor from './routes/ArtikelEditor.tsx';

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
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
