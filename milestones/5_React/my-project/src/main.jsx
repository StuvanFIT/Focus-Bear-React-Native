import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import HelloWorld from './components/HelloWorld.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <HelloWorld name={"Steven Kaing"} />
  </StrictMode>,
)
