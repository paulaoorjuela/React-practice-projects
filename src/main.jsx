import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './pizza-menu/index.css'
// import './basics/index.css'
import App from './pizza-menu/App.jsx'
// import App from './basics/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
