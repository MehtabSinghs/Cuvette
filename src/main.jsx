import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CompanySignUp from './pages/CompanySignUp.jsx'
import './index.css'
import Verification from './pages/Verification.jsx'
import Header from './pages/Header.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Header/>
    <CompanySignUp />  */}
    
  </React.StrictMode>,
)
