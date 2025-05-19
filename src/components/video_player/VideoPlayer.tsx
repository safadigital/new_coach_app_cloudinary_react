import { useLocation, useNavigate } from "react-router";
import useStore from "../../store/store";
import { getLessonVideoItemById } from "../../utils/lesson_content";
import { useEffect, useRef } from 'react';

 import BackwardIcon from '../../assets/Backward.svg';
import ForwardIcon from '../../assets/Forward.svg';
import { timeToString } from "../../utils/time";

declare global {
    interface Window { cloudinary: any; }
}

const VideoPlayer = () => {

    const { lessonData, isVideoPlaying, setIsVideoPlaying, isAudioMuted, setIsAudioMuted, isVideoPlaybackFast, setIsVideoPlaybackFast, isVideoNavShown, setIsVideoNavShown } = useStore();
    const cloudinaryRef: any = useRef({});
    const videoRef: any = useRef({});

    const navigate = useNavigate();


    const loc = useLocation();
    let video_id = loc.search.split("=")[1] ? loc.search.split("=")[1] : '';

    const videoItem = getLessonVideoItemById(lessonData, video_id);

    // console.log("Video ITEM in Playe: ", videoItem)

    const handleVideoNavShown = () => {
      setIsVideoNavShown(true);
      setTimeout(() => {
        setIsVideoNavShown(false)
      }, 2000)
    }

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
   <div
   onClick={handleVideoNavShown}
   className='flex h-screen justify-center'>
 <video
 src={videoItem.video_url}
  poster={videoItem.preview_url}
 ref={videoRef} />
 
  </div>

{
  isVideoNavShown && (
    <div className='overlay'>
<div className='fixed flex bottom-5 cursor-pointer text-[#fff] ml-5 mr-5'>
   <div
  onClick={() => {
     navigate(`/lesson?lesson_id=${lessonData.lesson_id}`);
  }}
  className='visible top-[2%] fixed flex flex-start w-[40px] h-[40px] bg-[#141D19] items-center justify-center rounded-full cursor-pointer'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-[#fff] font-bold">
  <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
</svg>
  </div>

<div className="bottom-[16%] w-[90%] fixed flex justify-between">
  <div>
 {  timeToString({ time:  videoRef.current.currentTime})}
  </div>

  <div>
   {  timeToString({ time:  videoRef.current.duration})}
  </div>

</div>

  <div className="bottom-[20%] w-[90%] fixed flex h-1">
     <progress value={Math.ceil((videoRef.current.currentTime / videoRef.current.duration) * 100)} max="100" className="h-full w-full flex h-1 " />

  </div>


{
    isVideoPlaybackFast === false ? (
<span
onClick={ () => {
    setIsVideoPlaybackFast(true);
    videoRef.current.playbackRate = 2;
}}
className='text-[#fff] bg-black h-[25px] w-[25px] mr-7 mt-5 flex justify-center items-center rounded-full cursor-pointer'>
    <span className="">
2x
    </span>

  </span>
    ) : (
        <span
onClick={ () => {
    setIsVideoPlaybackFast(false);
    videoRef.current.playbackRate = 1;
}}
className='text-[#fff] bg-black h-[25px] w-[25px] mr-7 mt-5 flex justify-center items-center rounded-full cursor-pointer'>
<span>1x</span>
  </span>
    )
}


 <span onClick={() =>  videoRef.current.currentTime = videoRef.current.currentTime - 15} className={"cursor-pointer"}>
     
      <img src={BackwardIcon} alt="" />
     
        </span>
<span>
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

</span>

 





 <span onClick={() =>   videoRef.current.currentTime = videoRef.current.currentTime + 15} className={"cursor-pointer"}>
      <img src={ForwardIcon} alt="" />
        </span>

{
    isAudioMuted === false ? (
        <span onClick={() => {
            setIsAudioMuted(true);
            videoRef.current.volume = 0;
        }} className={"cursor-pointer flex items-center pl-8"}>
      
 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#fff]">
  <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
  <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
</svg>


        </span>
    ) : (
<span onClick={() => {
            setIsAudioMuted(false);
            videoRef.current.volume = 1;
        }}  className={"cursor-pointer flex items-center pl-8"}>
          
        
        

 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#fff]">
  <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" />
</svg>

        </span>
    )
}
 
</div>
    
   </div>
  )
}

     
    </>
  )
}


export default VideoPlayer;