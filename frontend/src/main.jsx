import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/work-sans/wght.css'
import '@fontsource-variable/work-sans/wght-italic.css'
import '@fontsource-variable/newsreader/opsz.css'
import '@fontsource-variable/newsreader/opsz-italic.css'
import './index.css'
import './i18n';
import App from "./app/App.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
