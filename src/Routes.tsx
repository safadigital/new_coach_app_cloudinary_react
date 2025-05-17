import { createBrowserRouter } from "react-router";
// import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
// import VideoPlayer from "./components/video_player/videoPlayer";
// import LessonPage from "./pages/LessonPage/LessonPage";

export const router = createBrowserRouter([
  //  {
        // path: "/",
        // element: <App />,
        // children: [
           { path: "/", element: <HomePage /> },
           { path: "/profile", element: <ProfilePage /> },
        //    { path: "/lesson", element: <LessonPage /> },
            // { path: "/player", element: <VideoPlayer /> }
     //   ]
  //  }
])