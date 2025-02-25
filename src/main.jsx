import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import OscuroContext from './context/oscuroContext'
import InfoContext from './context/InfoContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InfoContext>

      <OscuroContext>
      
        <App />
      
      </OscuroContext>
    
    </InfoContext>
  </StrictMode>,
)
