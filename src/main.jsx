import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import Home from "./components/Home";
import ProtectRoute from './components/ProtectRoute';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
     <ProtectRoute>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
      </ProtectRoute>
    </BrowserRouter>
  </StrictMode>,
)
