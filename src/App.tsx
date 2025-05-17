// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


// import cloudinary from 'cloudinary-video-player';
// import 'cloudinary-video-player/cld-video-player.min.css';
import { useEffect, useRef } from 'react';


declare global {
    interface Window { cloudinary: any; }
}

function App() {

// const demoplayer = cloudinary.videoPlayer('doc-player', { cloudName: 'demo' });

// demoplayer.source('https://res.cloudinary.com/the-coach/video/upload/v1681652731/BREATHING_PRACTICE_hpdspx.mp4');

  const cloudinaryRef: any = useRef({});
  const videoRef: any = useRef({});

  // const playVideoHandle = () => {
  //   videoRef.current.play();
  // }

  useEffect(() => {
    if ( cloudinaryRef.current ) return;

    cloudinaryRef.current = window.cloudinary;
    cloudinaryRef.current.videoPlayer(videoRef.current, {
      cloud_name: 'demo',
      // preview: 'https://res.cloudinary.com/the-coach/image/upload/v1681746201/expert_Natalie_faekxs.jpg',
      // src: "https://res.cloudinary.com/the-coach/video/upload/v1681652731/BREATHING_PRACTICE_hpdspx.mp4",
    });

//     setTimeout(() => {
//         videoRef.current.play();
// // playVideoHandle();
//     }, 0)
    
  }, []);

  // const [demoplayer, setDemoplayer] = useState({});



// useEffect(() => {
//  const demoplayer = cloudinary.videoPlayer('doc-player', { cloudName: 'demo' });

// demoplayer.source('https://res.cloudinary.com/the-coach/video/upload/v1681652731/BREATHING_PRACTICE_hpdspx.mp4');

// setDemoplayer(demoplayer);

// }, [])

   
   
  

        // Button 'click' event handlers

        // document.querySelector("#vid-seek-minus").addEventListener('click', function() {
        //   player.currentTime(player.currentTime() - 10);
        // });

        // document.querySelector("#vid-seek-plus").addEventListener('click', function() {
        //   player.currentTime(player.currentTime() + 10);
        // });

        // document.querySelector("#vid-play-prev").addEventListener('click', function() {
        //   player.playPrevious();
        // });

        // document.querySelector("#vid-play").addEventListener('click', function() {
        //   player.play();
        // });

        // document.querySelector("#vid-play-next").addEventListener('click', function() {
        //   player.playNext();
        // });

        // document.querySelector("#vid-pause").addEventListener('click', function() {
        //   player.pause();
        // });

        // document.querySelector("#vid-stop").addEventListener('click', function() {
        //   player.stop();
        // });

        // document.querySelector("#vid-mute").addEventListener('click', function() {
        //   player.mute();
        // });

        // document.querySelector("#vid-unmute").addEventListener('click', function() {
        //   player.unmute();
        // });

        // document.querySelector("#vid-volume-minus").addEventListener('click', function() {
        //   player.volume(player.volume() - 0.1);
        // });

        // document.querySelector("#vid-volume-plus").addEventListener('click', function() {
        //   player.volume(player.volume() + 0.1);
        // });

        // document.querySelector("#vid-maximize").addEventListener('click', function() {
        //   player.maximize();
        // });

        // document.querySelector("#vid-toggle-controls").addEventListener('click', function() {
        //   player.controls(!player.controls());
        // });


        // Register to some video player events
        // var eventTypes = ['play', 'pause', 'volumechange', 'mute', 'unmute', 'fullscreenchange',
        //   'seek', 'sourcechanged', 'percentsplayed', 'ended'];

        // var eventsDiv = document.querySelector('#vid-events');
        // eventTypes.forEach(function(eventType) {
        //   player.on(eventType, function(event: any) {
        //     var eventStr = eventType;
        //     if (event.eventData) {
        //       eventStr = eventStr + ": " + JSON.stringify(event.eventData);
        //     }
        //     var text = document.createTextNode(eventStr);
        //     var textDiv = document.createElement('div');
        //     textDiv.appendChild(text);
        //     eventsDiv.appendChild(textDiv);
        //     updateEvents();
        //   })
        // });

        // function updateEvents() {
        //   var eventsDiv = document.querySelector('#vid-events');
        //   eventsDiv.scrollTop = eventsDiv.scrollHeight;
        // }

  // console.log("CLoudinary object: ", cloudinary);

  return (
    <>
   <div className='flex h-screen justify-center'>
 <video
 src="https://res.cloudinary.com/the-coach/video/upload/f_auto,q_auto/v1683028169/Video%20for%20PE%20and%20ED%20programs/relational_causes_1_bx8n9z.mp4"
  poster='https://res.cloudinary.com/the-coach/image/upload/v1681746201/expert_Natalie_faekxs.jpg'
 ref={videoRef} />
 

<div className='fixed flex bottom-5 cursor-pointer bg-black text-[#fff]'>
   <div
  onClick={() => {
    // setTracks([]);
    // setTrackItemIds([]);
    // setTrackItemsMap({});
    // setActiveIds([]);
    // navigate('/lesson');
  }}
  className='visible top-[2%] fixed flex flex-start w-[40px] h-[40px] bg-[#141D19] items-center justify-center rounded-full cursor-pointer'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-[#fff] font-bold">
  <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
</svg>
  </div>

  {/* buttons */}
  <div className=''>

  </div>

 <svg 
 // onClick={handlePause}
   onClick={() => videoRef.current.play()}
xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 bg-[#fff] rounded-[50px] text-black p-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>

&nbsp; &nbsp; &nbsp;

<svg 
  onClick={() => videoRef.current.pause()}
// onClick={handlePlay}
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-16 bg-[#fff] rounded-[50px] text-black p-3 font-bold">
  <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
</svg>

 {/* <button
        onClick={() => videoRef.current.play()}
        id="vid-play" className="ml-5 mr-5 pr-5 pl-5 cursor-pointer">Play</button>
        <button

        onClick={() => videoRef.current.pause()}
        id="vid-pause" className="btn btn-default">Pause</button> */}
        {/* <button id="vid-stop" className="btn btn-default">Stop</button> */}
</div>
       
   </div>
    </>
  )
}

export default App
