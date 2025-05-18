import { useLocation } from "react-router";
import useStore from "../../store/store";
import { getLessonVideoItemById } from "../../utils/lesson_content";


const VideoPlayer = () => {

    const { lessonData } = useStore();


    const loc = useLocation();
    let video_id = loc.search.split("=")[1] ? loc.search.split("=")[1] : '';

    const videoItem = getLessonVideoItemById(lessonData, video_id);

    console.log("Video ITEM in Playe: ", videoItem)

    return <h1>VideoPlayer. Video Item previw url: {videoItem.preview_url}</h1>
}


export default VideoPlayer;