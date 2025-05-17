import { useEffect, useState } from 'react';
 import axios from 'axios';
// import thedata from '../../mock_data/lesson_data.json';
 import useStore from '../../store/store';
import LessonHeader from '../../components/lesson/LessonHeader';
// import { getLessonContent } from '@/utils/lesson_content';
import PageContent from '../../components/lesson/PageContent';

 import { useLocation } from 'react-router-dom';


const LessonPage = () => {

//    const [ setIsLoading] = useState(false);
   // const [data] = useState<any>(thedata);
   const [data, setData] = useState<any>({});

    const loc = useLocation();


 const {  setTotalPages, setCurrentPage, setLessonTitle, setLessonData } = useStore();
// const { setLessonData, currentPage } = useStore();




// function setDataToStore() {
//     setLessonData(data);

// }


// current page data use in useState

/*
-------------------------------------------------------
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
TODO

"freetext_content" : [],
"image_content" : [],
"quiz_content" : [],
"rating_content" : [],
"text_content" : [],
"video_content" : [],


Сделать выборку по каждому из массовивов 


*/


useEffect(() => {
 //   setData(thedata);
 //   setDataToStore();
   const baseUrl = import.meta.env.VITE_API_BASE_URL;
   const lessonsUrl = import.meta.env.VITE_API_LESSONS_URL;
  //  const baseurl = "/api/v1/coachprogram/lessons/";
  

//    // https://content.the.coach/api/v1/coachprogram/lessons/body_scanning/

     if (loc != undefined) {
 let lesson_id = loc.search.split("=")[1];
  console.log("Inputted lesson id: ", lesson_id);

  axios.get(`${baseUrl}${lessonsUrl}${lesson_id}/`, {
    headers: {
      'Content-Type': 'application/json',
        'AppVersion': '1.12.1',
        'Authorization': `Token ${import.meta.env.VITE_API_TOKEN}`,
       
    }
})
.then((response: any) => {
    console.log('RESPONSE LESSON Data FROM SERVER:', response.data);
    setData(response.data);
  //  setHeadline(response.data?.plan[0]?.headline);
   // setLessons(response.data?.plan[0]?.questions);

  //  setTheoryLessons(response.data?.plan[0]?.questions.filter((lesson: any) => lesson.section_id === 0 ));

   // setIsLoading(false);
   setLessonData(response.data);
setTotalPages(response.data.pages);
setLessonTitle(response.data.plate_name);
 setCurrentPage(1);

})
.catch(error => {
    console.error('Error:', error);
});
     }

// setLessonData(data);
// setTotalPages(data.pages);
// setLessonTitle(data.plate_name);
//  setCurrentPage(1);
 // setPageContentItems(new_lesson_content_arr);

}, [])

    return (
    <>
    {/* { isLoading === true ? */}
   <LessonHeader lesson_data={data}  /> 
   <PageContent lesson_data={data} />
   
   {/* : <h1>Data is loading...</h1>  } */}
    
    </>
       
       
    )
}

export default LessonPage;