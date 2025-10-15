import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './ui/components/App.jsx'
import HelloWorld from './ui/components/HelloWorld.jsx'
import Counter from './ui/components/Counter.jsx'
import AppLayout from './ui/layouts/AppLayout.jsx'
import InputList from './ui/components/InputList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLayout>
      <App />
      <HelloWorld name={"Steven Kaing"} />
      <Counter />
      <InputList />
    </AppLayout>
  </StrictMode>,
)
