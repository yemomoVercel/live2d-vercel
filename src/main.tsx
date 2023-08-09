import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Live2d from "./page/Live2d"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Live2d />
  </React.StrictMode>,
)
