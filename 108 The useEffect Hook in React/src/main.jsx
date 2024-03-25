import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,

  //This </React.StrictMode> is for first test the code and then run the code.
  //that's why usestate run twice
)
