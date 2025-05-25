import React, { useEffect } from "react";
import useStore from "../../store/store";
import { getLessonContent } from "../../utils/lesson_content";

import playIcon from '../../assets/play_button.svg';

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

// mock data
// import lessonData from '../../mock_data/lesson_data.json';

interface PageContentProps {
  lesson_data: any
}


const PageContent: React.FC<PageContentProps> = ({ lesson_data }) => {

    const { currentPage, setCurrentPage, lessonData, setLessonData } = useStore();
    const navigate = useNavigate();

 //   console.log(lesson_data);
 useEffect(() => {
setLessonData(lesson_data);
 }, [])

// console.log("Whole lesson data from store: ", lessonData);

// const lessonData = lesson_data;

const freeText = lessonData.freetext_content ? lessonData.freetext_content : [];
const image = lessonData.image_content ? lessonData.image_content : [];
const quiz = lessonData.quiz_content ? lessonData.quiz_content : [];
const rating = lessonData.rating_content ? lessonData.rating_content : [];
const text = lessonData.text_content ? lessonData.text_content : [];
const video = lessonData.video_content ? lessonData.video_content : [];

 const pageContentItems = getLessonContent(freeText, image, quiz, rating, text, video, currentPage);

// console.log(" PAGE CONTENT ITEMS ON CONTENT PAGE: ", pageContentItems);
// /api/v1/coachprogram/lessons/<str:lesson_id>/done

const handleFinishLesson = () => {
    const auth_token = localStorage.getItem("uid");
    let dynamic_headers = {};
    if (!!auth_token === true) {
        dynamic_headers = {
            'Content-Type': 'application/json',
                 'AppVersion': '100.0.0',
                  'Coach-Authorization': `${auth_token}`,
        }
    } else {
           dynamic_headers = {
             'Content-Type': 'application/json',
                'AppVersion': '1.12.1',
            'Authorization': `Token ${import.meta.env.VITE_API_TOKEN}`,
        }
    }

    axios.post(`${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_LESSONS_URL}${lessonData.lesson_id}/done`, {
        "program_id": lessonData.program_id
    }, {
        headers: dynamic_headers
    }).then((response: any) => {
console.log(" Response when finished lesson: ", response);
navigate('/');
    }).catch(error => {
    console.error('Error:', error);
    navigate('/');
});
}

    return (
        <>
        <div className="visible broad_desktop flex-column pr-5 pl-5 overflow-y-auto pt-20 low">

      
      {
        pageContentItems && pageContentItems.map((item: any, idx: number) => {
            if (item.content_type == 'section') {
                return <h3 key={idx} className="text-[#FF6D03] sp_pro_text_medium_font text-[14px] font-bold tracking-[6%] uppercase pt-5 pb-5">{item.text}</h3>
            }
             if (item.content_type == 'video') {
                return <div key={idx} className="pb-2"> 

<Link to={`/player?video_id=${item.content_id}`}>
                    <svg className="responsive-image" 
 xmlns="http://www.w3.org/2000/svg" 
 xmlnsXlink="http://www.w3.org/1999/xlink">
    <image xlinkHref={item.preview_url}  className="responsive-image rounded_img"  />
    <image className="cursor-pointer" xlinkHref={playIcon} x="40%" y="40%" height="50" width="50" />    
</svg>
</Link>

    <div className="w-full bg-[#F1ECE9] pb-2 rounded_video_info">
        <p className="pl-2 pt-2 text-[16px] new_york_medium_font font-semibold">{item.video_name}</p>
        <p className="pl-2 pt-2 text-[#696E6C] text-[14px] font-bold sp_pro_text_medium_font tracking-[6%] uppercase">{item.author}</p>
    </div></div>
            }
            if (item.content_type == 'normal_text') {
                return <p key={idx} className="new_york_medium_font text-[16px] pb-5">{item.text}</p>
            }
            if (item.content_type == 'important_text') {
                return <div key={idx} className="visible flex bg-[#CBDCB533] left_green_border pt-2 pb-5 mb-5">
        <p className="new_york_medium_font text-[16px] pl-5 pr-5 mt-[24px] mb-[24px]">{item.text}</p>
    </div>
            }
            if (item.content_type == 'header') {
                return <h1 key={idx} className="page_h1 new_york_large_bold pb-[16px] tracking-[-2%] text-[24px] leading-[32px]">{item.text}</h1>
            }
             if (item.content_type == 'img_landscape') {
                return <img className="pb-2" src={item.img_url} />
            }
            if (item.content_type == 'img_portrait') {
                return <img className="pb-2" src={item.img_url} />
            }
             if (item.content_type == 'img_square') {
                return <img className="pb-2" src={item.img_url} />
            }

        })
      }
        </div>

{
    currentPage < lessonData.pages ?  <div className="bg-[#fff] fixed bottom-0 pt-2 mt-2 pb-5 broad_desktop the_content_button pr-5 pl-5"> <button
        onClick={() => {
            setCurrentPage(currentPage + 1); 
            window.scrollTo(0, 0); 
        }}
        className=" visible bg-[#141D19] text-[#fff] text-[14px] sp_pro_text_medium_font font-bold the_content_button pt-[18px] pb-[18px] uppercase cursor-pointer rounded-sm">Continue</button></div> : <div></div>
}

{
    currentPage == lessonData.pages ?  <div className="bg-[#fff] fixed bottom-0 pt-2 mt-2 pb-5 broad_desktop the_content_button pr-5 pl-5"> <button
        onClick={handleFinishLesson}
       className=" visible bg-[#141D19] text-[#fff] text-[14px] sp_pro_text_medium_font font-bold the_content_button pt-[18px] pb-[18px] uppercase cursor-pointer rounded-sm">Finish</button></div> : <div></div>
}

       

        </>
    )

}

export default PageContent;