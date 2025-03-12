import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './pizza-menu/index.css'
import App from './pizza-menu/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
