import profileImg from '../../assets/profile.svg';
import leftArrov from '../../assets/left_arrow.svg';
import rightArrov from '../../assets/right_arrow.svg';

import statusDone from '../../assets/status_done.svg';
import statusNext from '../../assets/status_next.svg';

import axios from 'axios';

import { Link } from 'react-router-dom';

// fake data
// import data from '../../mock_data/daily_plan.json';
import { useEffect, useState } from 'react';
 import { useLocation } from 'react-router-dom';
//interface Props {}

// const HomePage = (props: Props) => {

const HomePage = () => {

    const [userId, setUserId] = useState("ios_p1W7YHzv2DblPDIYNUWGuV8A5s02");

    let user_id = "ios_p1W7YHzv2DblPDIYNUWGuV8A5s02";
  
  

   // console.log("QUERY FROM LOCATION: ", loc.search.split("=")[1]);

  //  const apiUrl = import.meta.env.VITE_API_URL;
//  const [userId, setUserId] = useState<any>('');
 // const query = new URLSearchParams(location.search);
  //  const user_id = query.get('user_id')

//   function getUserId() {
// let user_id = useLocation();
// console.log("user id is: ", user_id)
// setUserId("");
// return user_id;

//   }
 // getUserId();
 //   console.log("user id from user: ", user_id)
  
  
   

  //  console.log("params from user: ", params);

    const [isLoading, setIsLoading] = useState(false);

    const [data, setData] = useState<any>({});

    const [headline, setHeadline] = useState("");
  //  const [lessons, setLessons] = useState([]);
    const [theoryLessons, setTheoryLessons] = useState([]);
    const [practiceLessons, setPracticeLessons] = useState([]);
    const [totalDays, setTotalDays] = useState(0);
    const [dayInProgram, setDayInProgram] = useState(0);
    const [progress, setProgress] = useState(0);


   // console.log(data.plan[0]);

console.log("DATA FROM SERVER: ", data)

 const loc: any = useLocation();
// console.log(lessons)
    // const headline = data?.plan[0]?.headline;
    // const lessons = data?.plan[0]?.questions;
    // const theory_lessons = lessons.filter((lesson: any) => lesson.section_id === 0 );
    // const practice_lessons = lessons.filter((lesson: any) => lesson.section_id === 1 );
    // const total_days = data?.plan[0]?.total_days;
    // const day_in_program = data?.plan[0]?.day_in_program;

    // const progress = data?.progress;

    //  const headline = ""
    // const lessons: any = [];
    // const theory_lessons = lessons.filter((lesson: any) => lesson.section_id === 0 );
    // const practice_lessons = lessons.filter((lesson: any) => lesson.section_id === 1 );
    // const total_days = 20;
    // const day_in_program = 2;

    // const progress = 20;
  


    useEffect(() => {
        const baseurl = '/api/v1/daily_plan/v3/?user_id=';
 //  const baseurl = "https://content.the.coach/api/v1/daily_plan/v3/?user_id=";
        
// setUserId(getUserId());
setIsLoading(true);

 
    if (loc != undefined) {
 user_id = loc.search.split("=")[1];
 console.log("Inputted user id: ", user_id);
 
 setUserId(user_id);
 console.log('Saved user id from user: ', userId);
    }

axios.get(`${baseurl}${userId}`, {
    headers: {
      'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': '*',
    //    'Access-Control-Allow-Methods': 'GET',
        'User-Agent': 'android',
        'AppVersion': '1.18.2',
        'Authorization': `Token ${import.meta.env.VITE_API_TOKEN}`,
       
    }
})
.then((response: any) => {
  //  console.log('Data:', response.data);
    setData(response.data);
    setHeadline(response.data?.plan[0]?.headline);
   // setLessons(response.data?.plan[0]?.questions);

    setTheoryLessons(response.data?.plan[0]?.questions.filter((lesson: any) => lesson.section_id === 0 ));

    setPracticeLessons(response.data?.plan[0]?.questions.filter((lesson: any) => lesson.section_id === 1 ));

    setTotalDays(response.data?.plan[0]?.total_days);
    setDayInProgram(response.data?.plan[0]?.day_in_program);
    setProgress(response.data?.progress);

    setIsLoading(false);

})
.catch(error => {
    console.error('Error:', error);
});
    }, [])

    { 
        
        if (isLoading === true) {
return (<>
<div className='w-full h-full flex items-center justify-center'>
<h1>Loading</h1>
</div>
</>) 
        } else {
               return (
        <>
         <header className="visible sm:invisible lg:invisible flex items-center justify-between pr-5 pl-5 pt-5">
        <div className="flex-column">
            <h3 className="text-xl font-bold new_york_medium_font">{headline}</h3>
            <div className="">
                <span className='smallProgress flex items-start pt-3'>
  <progress className='h-1.5 w-20' value={progress} max={100} />
      &nbsp;
                  <sup className="text-xs text-[#696E6C] font-bold tracking-widest">{progress}%</sup>
                </span>
              
              
            </div>
          
        </div>
    
        <img className="cursor-pointer w-[31px] h-[31px]" src={profileImg} alt="" />
       
    </header>

    <hr className="visible sm:invisible text-gray-200" />

    <div className="visible sm:invisible flex items-center justify-between pr-5 pl-5 pt-3">
<img className="cursor-pointer" src={leftArrov} alt="" />
<p className="text-[#696E6C] text-xs font-bold new_york_medium_font">Day {dayInProgram} of {totalDays}</p>
<img className="cursor-pointer" src={rightArrov} alt="" />
    </div>

    <div className="visible flex pr-5 pl-5 pt-5">
<p className="text-[#696E6C] text-[10px] uppercase font-bold sp_pro_text_medium_font wide">Daily lessons</p>
    </div>


{

theoryLessons.map((lesson: any, idx: number) => (
  <div key={idx} className="visible columns pr-5 pl-5 pt-1 mt-2 mb-2 ">
  
    <div className="flex bg-[#F3F4F4] topleftrounded bottomleftrounded pt-[16px] pl-[16px] pb-[16px] bottom_shadow">
        <img className="couseimage" src={lesson.main_image} alt="" />
    </div>
    <div className="flex-column bottomrightrounded toprightrounded content-between bg-[#F3F4F4] pl-3 pr-[16px] pt-[16px] pb-[16px] bottom_shadow">
        <div className="flex flex-row w-full justify-between items-center">
            <p className="text-[16px] font-bold new_york_medium_font mr-1">{lesson.headline}</p>
              <Link to={ lesson.completed ? "#" : `/lesson?lesson_id=${ lesson.link_type.coach_lesson ? lesson.link_type.coach_lesson.lesson_id :  lesson.link_type.coach_video.lesson_id}` }>
            <img className="w-[30px] h-[30px]" src={ lesson.completed ? statusDone : statusNext} alt="" />
            </Link>
                </div>
                <div className="mttauto">
                    <p className="text-[10px] text-[#696E6C] uppercase font-bold sp_pro_text_medium_font wide">{lesson.description}</p>
                    <p className="text-[10px] text-[#696E6C] uppercase font-bold sp_pro_text_medium_font wide">{lesson.duration}</p>     
                        </div>
    </div>
   </div>
))

}

   



       <div className="visible flex pr-5 pl-5 pt-3">
        <p className="text-[#696E6C] text-[10px] uppercase font-bold sp_pro_text_medium_font wide">Daily practice</p>
            </div>


       {

practiceLessons.map((lesson: any, idx: number) => (
  <div key={idx} className="visible columns pr-5 pl-5 pt-1 mt-2 mb-2 ">
  
    <div className="flex bg-[#F3F4F4] topleftrounded bottomleftrounded pt-[16px] pl-[16px] pb-[16px] bottom_shadow">
        <img className="couseimage" src={lesson.main_image} alt="" />
    </div>
    <div className="flex-column bottomrightrounded toprightrounded content-between bg-[#F3F4F4] pl-3 pr-[16px] pt-[16px] pb-[16px] bottom_shadow">
        <div className="flex flex-row w-full justify-between items-center">
            <p className="text-[16px] font-bold new_york_medium_font mr-1">{lesson.headline}</p>

            <Link to={ lesson.completed ? "#" : `/lesson?lesson_id=${ lesson?.link_type.coach_lesson ? lesson?.link_type.coach_lesson?.lesson_id :  lesson.link_type.coach_video?.lesson_id}` }>
            <img className="w-[30px] h-[30px]" src={ lesson.completed ? statusDone : statusNext} alt="" />
            </Link>
            
                </div>
                <div className="mttauto">
                    <p className="text-[10px] text-[#696E6C] uppercase font-bold sp_pro_text_medium_font wide">{lesson.description}</p>
                    <p className="text-[10px] text-[#696E6C] uppercase font-bold sp_pro_text_medium_font wide">{lesson.duration}</p>     
                        </div>
    </div>
   </div>
))

}

      
        </>
    )
        }
       

     }


     

}


export default HomePage