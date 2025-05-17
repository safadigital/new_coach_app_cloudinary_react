

export function getLessonContent(freetext_content: any[], image_content: any[], quiz_content: any[], rating_content: any[], text_content: any[], video_content: any[], current_page: number) {

    // cltkfnm abkmnh по каждому из полученных конентов по странице
    // page_order === current_page
   let new_freetext_arr = freetext_content.filter((freetext) => freetext.page_order === current_page );

   let new_image_arr = image_content.filter((image) => image.page_order === current_page );

    let new_quiz_arr = quiz_content.filter((quiz) => quiz.page_order === current_page );

    let new_rating_arr = rating_content.filter((rating) => rating.page_order === current_page );

    let new_text_arr = text_content.filter((text) => text.page_order === current_page );

    let new_video_arr = video_content.filter((video) => video.page_order === current_page );


//     const array1 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
// const array2 = [{ id: 3, name: 'Charlie' }, { id: 4, name: 'David' }];
// const array3 = [{ id: 5, name: 'Eve' }];

const combinedArray = new_freetext_arr.concat(new_image_arr, new_quiz_arr, new_rating_arr, new_text_arr, new_video_arr);

console.log(`SELECTED CONTENT FOR PAGE ${current_page}: `, combinedArray);

return combinedArray;
}