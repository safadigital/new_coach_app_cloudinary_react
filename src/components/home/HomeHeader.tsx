import { useState } from "react";
import useStore from "../../store/store";
// import { Link } from "react-router-dom";

const HomeHeader = () => {

 const [headline] = useState("");
 const [totalDays] = useState(0);

const { progress, currentDay } = useStore();

    return (

        <header className="visible top-0 bg-white h-20 flex items-center justify-between">
        <div className="flex-column gap-2">
            <h3 className="text-xl font-bold new_york_medium_font">{headline}</h3>
            <div className="">
                <span className='smallProgress flex items-start pt-3'>
  <progress className='h-1.5 w-12' value={progress} max={100} />
      &nbsp;
                  <sup className="text-xs text-[#696E6C] font-bold tracking-widest">{progress}%</sup>
                </span>
              
              
            </div>
          
        </div>
    
    {/* <Link to={'/profile'}>
        <img className="cursor-pointer w-[31px] h-[31px]" src={profileImg} alt="" />
       </Link> */}

 <hr className="visible text-gray-200" />

    <div className="visible flex items-center justify-between pt-3">
     
{/* <img
onClick={() => {
    if (  currentDay > 1) {
        setCurrentDay(currentDay - 1);
    }
}}
className="cursor-pointer" src={leftArrov} alt="" /> */}

<p className="text-[#696E6C] text-xs font-bold new_york_medium_font">Day {currentDay} of {totalDays}</p>

{/* <img
onClick={() => {
if ( currentDay < totalDays) {
setCurrentDay(currentDay + 1);
}
} }
className="cursor-pointer" src={rightArrov} alt="" /> */}

    </div>
    </header>
    )
}

export default HomeHeader;