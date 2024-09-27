import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Select from './select.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Select />
    <App />
  </React.StrictMode>,
)
