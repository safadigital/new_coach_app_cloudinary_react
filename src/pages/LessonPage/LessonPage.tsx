import { useEffect, useState } from 'react';
// import axios from 'axios';
 import thedata from '../../mock_data/lesson_data.json';
// import useStore from '@/store/store';
import LessonHeader from '../../components/lesson/LessonHeader';
// import { getLessonContent } from '@/utils/lesson_content';
import PageContent from '../../components/lesson/PageContent';

// import { useLocation } from 'react-router-dom';


const LessonPage = () => {

 //   const [isLoading, setIsLoading] = useState(false);
    const [data] = useState<any>(thedata);

  //  const loc = useLocation();


// const { totalPages, setTotalPages, currentPage, setCurrentPage } = useStore();
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
 //   setDataToStore();
//    const baseurl = "/api//v1/coachprogram/lessons/";

//    // https://content.the.coach/api/v1/coachprogram/lessons/body_scanning/

//      if (loc != undefined) {
//  let lesson_id = loc.search.split("=")[1];
//   console.log("Inputted lesson id: ", lesson_id);

//   axios.get(`${baseurl}${lesson_id}`, {
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//       'Content-Type': 'application/json',
//         'User-Agent': 'android',
//         'AppVersion': '1.18.2',
//         'Authorization': `Token ${import.meta.env.VITE_API_TOKEN}`,
       
//     }
// })
// .then(response => {
//     console.log('RESPONSE LESSON Data FROM SERVER:', response.data);
//     setData(response.data);
//   //  setHeadline(response.data?.plan[0]?.headline);
//    // setLessons(response.data?.plan[0]?.questions);

//   //  setTheoryLessons(response.data?.plan[0]?.questions.filter((lesson: any) => lesson.section_id === 0 ));

//     setIsLoading(false);

// })
// .catch(error => {
//     console.error('Error:', error);
// });
//      }


// setTotalPages(data.pages);
// setLessonTitle(data.plate_name);
//  setCurrentPage(1);
//  setPageContentItems(new_lesson_content_arr);

}, [])

    return (
    <>
    <LessonHeader lesson_data={data}  />
    <PageContent lesson_data={data} />
    </>
       
       
    )
}

export default LessonPage;