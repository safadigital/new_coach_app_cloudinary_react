import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '././context/AuthContext';
//import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import LessonPage from './pages/LessonPage/LessonPage';
import VideoPlayer from './components/video_player/VideoPlayer';
//import useStore from './store/store';


const App: React.FC = () => {

  // const [isAuth, setIsAuth] = useState(false);
 // const { isAuth } = useStore();

  return (
    <AuthProvider>
       <Fragment>
      <Router>
       
        <Routes>
       
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/lesson" element={<LessonPage />} />
          <Route path="/player" element={<VideoPlayer />} />
          <Route path="/" element={<HomePage />} />
           {/* <ProtectedRoute isAuth={isAuth} path='/' element={<HomePage />} />
            <ProtectedRoute isAuth={isAuth} path="/profile" element={<ProfilePage />} /> */}
        </Routes>
          
      </Router>
       </Fragment>
    </AuthProvider>
  );
};

export default App;