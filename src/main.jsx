import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './basics/App.jsx'
// import App from './pizza-menu/App.jsx'
// import App from './steps/App.jsx'
// import App from './far-away/App.jsx'
// import App from './date-record/App.jsx'
// import App from './text-expander/App.jsx'
// import App from './how-react-works/App.jsx'
import App from './currency-converter/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
