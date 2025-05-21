import profileImg from '../../assets/profile.svg';
import leftArrov from '../../assets/left_arrow.svg';
import rightArrov from '../../assets/right_arrow.svg';

import statusDone from '../../assets/status_done.svg';
import statusNext from '../../assets/status_next.svg';
import useStore from '../../store/store';

import axios from 'axios';

import { Link } from 'react-router-dom';

// fake data
// import data from '../../mock_data/daily_plan.json';
import { useEffect, useState } from 'react';
 import { useLocation } from 'react-router-dom';
//import { logout } from '../../utils/logout';
//interface Props {}

// const HomePage = (props: Props) => {

const HomePage = () => {

 //  const navigate = useNavigate();

 //   const [userId, setUserId] = useState("ios_p1W7YHzv2DblPDIYNUWGuV8A5s02");

    // let user_id = "ios_p1W7YHzv2DblPDIYNUWGuV8A5s02";
  
  // let user_id = "";

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

   // const [data, setData] = useState<any>({});

     const { dailyPlanData, setDailyPlanData, currentDay, setCurrentDay, progress, setProgress } = useStore();

     
    const [headline, setHeadline] = useState("");
  //  const [lessons, setLessons] = useState([]);
    const [theoryLessons, setTheoryLessons] = useState([]);
    const [practiceLessons, setPracticeLessons] = useState([]);
    const [totalDays, setTotalDays] = useState(0);
    const [ daysInProgram, setDayInProgram] = useState(0);
 //   const [progress, setProgress] = useState(0);


   // console.log(data.plan[0]);

// console.log("DATA FROM SERVER: ", data)
console.log(daysInProgram)

 const loc: any = useLocation();


//  const handleDailyPlanData = (location: any, current_day_number: number) => {
// setIsLoading(true);
//      let baseUrl = import.meta.env.VITE_API_BASE_URL;
//      const homeUrl = import.meta.env.VITE_API_HOME_URL;
//      user_id = location.search.split("=")[1] ? location.search.split("=")[1] : localStorage.getItem("userId");
//  }
  


    useEffect(() => {
  
        // полная строка
        let full_url = '';
        // хедеры
        let dynamic_headers = {};

        // делаем проверку если данные приходят из локальной строки параметром user_id
        let user_id = loc.search.split("=")[1];
        let auth_token = localStorage.getItem("uid");
        console.log(" auth token from local storage: ", auth_token)
        if (user_id !== undefined) {
            full_url = import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_API_HOME_URL + '?user_id=' + user_id;
            dynamic_headers = {
                 'Content-Type': 'application/json',
                 'AppVersion': '1.12.1',
                 'Authorization': `Token ${import.meta.env.VITE_API_TOKEN}`,
            }
        } else {
            full_url = import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_API_HOME_URL;
            dynamic_headers = {
                 'Content-Type': 'application/json',
                 'AppVersion': '100.0.0',
                  'Coach-Authorization': `${auth_token}`,
            }
        }
 
  let currentDayRequest = '';
if (!!dailyPlanData.plan && !!auth_token) {
  currentDayRequest = dailyPlanData?.plan[0]?.day_in_program != currentDay ? `?date=${dailyPlanData.date}&${dailyPlanData?.plan[0]?.name}=${currentDay}` : '';
}

if (!!dailyPlanData.plan && !!auth_token === false) {
  currentDayRequest = dailyPlanData?.plan[0]?.day_in_program != currentDay ? `&date=${dailyPlanData.date}&${dailyPlanData?.plan[0]?.name}=${currentDay}` : '';
}

//   let baseUrl = import.meta.env.VITE_API_BASE_URL;
//   const homeUrl = import.meta.env.VITE_API_HOME_URL;

 
 

  //const baseurlNew = "https://coach-preprod-cf87bfd42b85.herokuapp.com/api/v1/coachprogram/lessons/lesson_pairing_technique/";

  // https://coach-preprod-cf87bfd42b85.herokuapp.com/api/v1/coachprogram/lessons/lesson_pairing_technique/
        
// setUserId(getUserId());

// if (import.meta.env.VITE_API_MODE == 'dev') {
// baseUrl = '';
// }

setIsLoading(true);

//  let token = '';
//  let the_headers = {};

//     if (loc != undefined) {
//  user_id = loc.search.split("=")[1] ? '?user_id=' + loc.search.split("=")[1] : '';
//  console.log("Inputted user id: ", user_id);
//   token = localStorage.getItem("uid") ? localStorage.getItem("uid") : import.meta.env.VITE_API_TOKEN;

//   if (user_id != '') {
//  the_headers = {
//      'Content-Type': 'application/json',
//         'AppVersion': '1.12.1',
//         'Authorization': `Token ${token}`,
//   }
//   } else {
//  the_headers = {
//      'Content-Type': 'application/json',
//         'AppVersion': '1.12.1',
//         'Coach-Authorization': `${token}`,
//   }
//   }
 
//  setUserId(user_id);
//  console.log('Saved user id from user: ', userId);
//     }

   

    


// https://coach-preprod-cf87bfd42b85.herokuapp.com//api/v1/daily_plan/v3/?user_id=ios_p1W7YHzv2DblPDIYNUWGuV8A5s02
    

axios.get(`${full_url}${currentDayRequest}`, {
// axios.get('https://coach-preprod-cf87bfd42b85.herokuapp.com/api/v1/daily_plan/v3/?user_id=ios_UbQiZWExZ1XdBo618lYNz7jf4NI4', {
      headers: dynamic_headers
//  headers: {
//                  'Content-Type': 'application/json',
//                  'AppVersion': '100.0.0',
//                   'Coach-Authorization': `${auth_token}`,
//             }
//      headers: {
//      'Content-Type': 'application/json',
//         'AppVersion': '1.12.1',
//         'Authorization': `Token ${import.meta.env.VITE_API_TOKEN}`,
//   }
})
.then((response: any) => {
    console.log('DATA FROM SERVER FROM MAIN WINDOW:', response.data);
    setDailyPlanData(response.data);
   // setData(response.data);
 //  if (currentDay != 1) {
 setCurrentDay(response.data.plan[0].day_in_program);
 //  }
  
    if (currentDayRequest == '') {
setDailyPlanData(response.data);
// setProgress(Math.ceil((response.data?.plan[0]?.day_in_program / response.data?.plan[0]?.total_days) * 100));
  setCurrentDay(response.data?.plan[0]?.day_in_program);
setProgress(Math.ceil((currentDay / response.data?.plan[0]?.total_days) * 100));
 // setCurrentDay(1);
    } else {
        setDailyPlanData(response.data);
        setCurrentDay(currentDay);
        setProgress(Math.ceil((currentDay / response.data?.plan[0]?.total_days) * 100));
    }
    
    setHeadline(response.data?.plan[0]?.headline);
   // setLessons(response.data?.plan[0]?.questions);

    setTheoryLessons(response.data?.plan[0]?.questions.filter((lesson: any) => lesson.section_id === 0 ));

    setPracticeLessons(response.data?.plan[0]?.questions.filter((lesson: any) => lesson.section_id === 1 ));

    setTotalDays(response.data?.plan[0]?.total_days);
    setDayInProgram(response.data?.plan[0]?.day_in_program);
    // setProgress(Math.ceil((response.data?.plan[0]?.day_in_program / response.data?.plan[0]?.total_days) * 100));

    setIsLoading(false);

})
.catch(error => {
    console.error('Error:', error);
});
    }, [currentDay])

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
        <div className='main_container'>
         <header className="visible flex items-center justify-between pt-5">
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
    
    <Link to={'/profile'}>
        <img className="cursor-pointer w-[31px] h-[31px]" src={profileImg} alt="" />
       </Link>
    </header>

    <hr className="visible text-gray-200" />

    <div className="visible flex items-center justify-between pt-3">
     
<img
onClick={() => {
    if (  currentDay > 1) {
        setCurrentDay(currentDay - 1);
    }
}}
className="cursor-pointer" src={leftArrov} alt="" />

<p className="text-[#696E6C] text-xs font-bold new_york_medium_font">Day {currentDay} of {totalDays}</p>

<img
onClick={() => {
if ( currentDay < totalDays) {
setCurrentDay(currentDay + 1);
}
} }
className="cursor-pointer" src={rightArrov} alt="" />
    </div>

    <div className="visible flex pt-5">
<p className="text-[#696E6C] text-[10px] uppercase font-bold sp_pro_text_medium_font wide">Daily lessons</p>
    </div>


{

theoryLessons.map((lesson: any, idx: number) => (
      <Link key={idx} to={`/lesson?lesson_id=${ lesson.link_type.coach_lesson ? lesson?.link_type?.coach_lesson?.lesson_id :  lesson?.link_type?.coach_video?.lesson_id}` }>
  <div className="visible columns pt-1 mt-2 mb-2 ">
  
    <div className="flex bg-[#F3F4F4] topleftrounded bottomleftrounded pt-[16px] pl-[16px] pb-[16px] bottom_shadow">
        <img className="couseimage" src={lesson.main_image} alt="" />
    </div>
    <div className="flex-column bottomrightrounded toprightrounded content-between bg-[#F3F4F4] pl-3 pr-[16px] pt-[16px] pb-[16px] bottom_shadow">
        <div className="flex flex-row w-full justify-between items-center">
            <p className="text-[16px] font-bold new_york_medium_font mr-1">{lesson.headline}</p>
              
            <img className="w-[30px] h-[30px]" src={ lesson.completed ? statusDone : statusNext} alt="" />
          
                </div>
                <div className="mttauto">
                    <p className="text-[10px] text-[#696E6C] uppercase font-bold sp_pro_text_medium_font wide">{lesson.description}</p>
                    <p className="text-[10px] text-[#696E6C] uppercase font-bold sp_pro_text_medium_font wide">{lesson.duration}</p>     
                        </div>
    </div>
   </div>
   </Link>
   
))

}

   



       <div className="visible flex pt-3">
        <p className="text-[#696E6C] text-[10px] uppercase font-bold sp_pro_text_medium_font wide">Daily practice</p>
            </div>


       {

practiceLessons.map((lesson: any, idx: number) => (
     <Link key={idx} to={`/lesson?lesson_id=${ lesson.link_type.coach_lesson ? lesson?.link_type?.coach_lesson?.lesson_id :  lesson?.link_type?.coach_video?.lesson_id}` }>
  <div className="visible columns pt-1 mt-2 mb-2 ">
  
    <div className="flex bg-[#F3F4F4] topleftrounded bottomleftrounded pt-[16px] pl-[16px] pb-[16px] bottom_shadow">
        <img className="couseimage" src={lesson.main_image} alt="" />
    </div>
    <div className="flex-column bottomrightrounded toprightrounded content-between bg-[#F3F4F4] pl-3 pr-[16px] pt-[16px] pb-[16px] bottom_shadow">
        <div className="flex flex-row w-full justify-between items-center">
            <p className="text-[16px] font-bold new_york_medium_font mr-1">{lesson.headline}</p>

            <img className="w-[30px] h-[30px]" src={ lesson.completed ? statusDone : statusNext} alt="" />
            
                </div>
                <div className="mttauto">
                    <p className="text-[10px] text-[#696E6C] uppercase font-bold sp_pro_text_medium_font wide">{lesson.description}</p>
                    <p className="text-[10px] text-[#696E6C] uppercase font-bold sp_pro_text_medium_font wide">{lesson.duration}</p>     
                        </div>
    </div>
   </div>
   </Link>
))

}

      </div>
        </>
    )
        }
       

     }


     

}


export default HomePage