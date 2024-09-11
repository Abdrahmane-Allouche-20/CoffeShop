import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import GlobalState from './context/context.js'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <GlobalState>
      <App />
      </GlobalState>
  </StrictMode>
  </BrowserRouter>

)
