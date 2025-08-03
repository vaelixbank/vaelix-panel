/**
 * ==============================================================
 * Project     : Vaelix Bank – Panel Client
 * File        : main.tsx
 * Version     : 1.0.0
 * Description : Client Entry Point
 * Author      : Sky Genesis Enterprise
 * Created on  : 2025-08-03
 * License     : AGPLv3
 * Forked from : N/A
 * Modified by : Liam Dispa <liam.dispa@skygenesisenterprise.com> (2025-08-03)
 * ==============================================================
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
