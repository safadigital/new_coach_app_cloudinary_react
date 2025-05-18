import { useLocation, useNavigate } from "react-router";
import useStore from "../../store/store";
import { getLessonVideoItemById } from "../../utils/lesson_content";
import { useEffect, useRef } from 'react';

 import BackwardIcon from '../../assets/Backward.svg';
import ForwardIcon from '../../assets/Forward.svg';

declare global {
    interface Window { cloudinary: any; }
}

const VideoPlayer = () => {

    const { lessonData, isVideoPlaying, setIsVideoPlaying } = useStore();
    const cloudinaryRef: any = useRef({});
    const videoRef: any = useRef({});

    const navigate = useNavigate();


    const loc = useLocation();
    let video_id = loc.search.split("=")[1] ? loc.search.split("=")[1] : '';

    const videoItem = getLessonVideoItemById(lessonData, video_id);

    // console.log("Video ITEM in Playe: ", videoItem)

     useEffect(() => {
    if ( cloudinaryRef.current ) return;

    cloudinaryRef.current = window.cloudinary;
    cloudinaryRef.current.videoPlayer(videoRef.current, {
      cloud_name: 'demo',
    });


    
  }, []);

  console.log("VIDEO PLAYER DATA: ", videoRef.current);

    // return <h1>VideoPlayer. Video Item previw url: {videoItem.preview_url}</h1>
    return (
    <>
   <div className='flex h-screen justify-center'>
 <video
 src={videoItem.video_url}
  poster={videoItem.preview_url}
 ref={videoRef} />
 

<div className='fixed flex bottom-5 cursor-pointer bg-black text-[#fff]'>
   <div
  onClick={() => {
     navigate(`/lesson?lesson_id=${lessonData.lesson_id}`);
  }}
  className='visible top-[2%] fixed flex flex-start w-[40px] h-[40px] bg-[#141D19] items-center justify-center rounded-full cursor-pointer'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-[#fff] font-bold">
  <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
</svg>
  </div>

  {/* buttons */}
  {/* <div className=''>

  </div> */}

{/* <span>Current time: {videoRef.current.currentTime}</span>
<span>DUration: {videoRef.current.duration}</span>
<span>Playback rate: {videoRef.current.playbackRate}</span> */}

 <span onClick={() =>  videoRef.current.currentTime = videoRef.current.currentTime - 15} className={"cursor-pointer"}>
     
      <img src={BackwardIcon} alt="" />
     
        </span>

{
    isVideoPlaying === true ? (
<svg 
  onClick={() => {
    setIsVideoPlaying(false);
    videoRef.current.pause();
   } }
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-16 bg-[#fff] rounded-[50px] text-black p-3 font-bold">
  <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
</svg>
    ) : (
<svg 
   onClick={() => {
    setIsVideoPlaying(true);
    videoRef.current.play();
   } }
xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 bg-[#fff] rounded-[50px] text-black p-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
    )
}

 





 <span onClick={() =>   videoRef.current.currentTime = videoRef.current.currentTime - 15} className={"cursor-pointer"}>
        {/* <ForwardIcon /> */}
      <img src={ForwardIcon} alt="" />
        {/* <ForwardIcon /> */}
        </span>

 
</div>
       
   </div>
    </>
  )
}


export default VideoPlayer;