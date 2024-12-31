import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App.jsx'
import '../public/style.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        
        <App/>
    </StrictMode>,
)
