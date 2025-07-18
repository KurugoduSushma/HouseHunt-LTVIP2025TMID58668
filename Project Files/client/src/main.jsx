import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppContextProvider } from './AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
)
