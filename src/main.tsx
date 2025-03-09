import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home.tsx';
import Artikel from './routes/Artikel.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/artikeln' element={<Artikel />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
