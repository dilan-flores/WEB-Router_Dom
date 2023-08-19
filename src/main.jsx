import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { CasaProvider } from './components/context/CasaProvider'

ReactDOM.render(
  <React.StrictMode>
    <CasaProvider>
      <App />
    </CasaProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// Outlet: espacio que me permite visualizar los elementos hijos (modificables), mientras que los elementos padres estáticos
