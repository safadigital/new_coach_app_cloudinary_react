import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext.tsx'
// import ProtectedRoute from './components/ProtectedRoute.tsx';

// import { RouterProvider } from "react-router-dom";
// import { router } from "./Routes.tsx";
// import LoginPage from './pages/LoginPage/LoginPage.tsx';
// import HomePage from './pages/HomePage/HomePage.tsx';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,

 
)
