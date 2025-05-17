import { useLocation } from "react-router";


const VideoPlayer = () => {

    const loc = useLocation();
    let video_id = loc.search.split("=")[1];

    return <h1>VideoPlayer. Video Id: {video_id}</h1>
}


export default VideoPlayer;