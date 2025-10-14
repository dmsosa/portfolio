import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './assets/css/styles.css'


createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
)
