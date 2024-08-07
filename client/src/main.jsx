import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom"
import ThemeProvider from './context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    {/* <ThemeProvider> */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    {/* </ThemeProvider> */}
  </Router>
)
