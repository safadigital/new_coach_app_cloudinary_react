import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '././context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import useStore from './store/store';


const App: React.FC = () => {

  // const [isAuth, setIsAuth] = useState(false);
  const { isAuth, setIsAuth } = useStore();

  return (
    <AuthProvider>
       <Fragment>
      <Router>
       
        <Routes>
         
          <Route path="/profile" element={<ProfilePage />} />
       
          <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
         
        </Routes>
            <ProtectedRoute isAuth={isAuth} path='/' element={<HomePage />} />
      </Router>
       </Fragment>
    </AuthProvider>
  );
};

export default App;