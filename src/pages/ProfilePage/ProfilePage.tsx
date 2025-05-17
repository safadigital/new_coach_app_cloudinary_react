import arrowLeft from '../../assets/arrow_left.svg';
import profileImg from '../../assets/profile.svg';
import supplementsImg from '../../assets/icon_supplements.svg';
import accountImg from '../../assets/icon_account.svg';
import supportImg from '../../assets/icon_support.svg';
import faqImg from '../../assets/icon_faq.svg';
import termsImg from '../../assets/icon_terms.svg';

const ProfilePage = () => {

    return (
        <>
        <div className="visible sm:invisible flex bg-[#F3F4F4] w-full pl-2 pt-5 pb-5">
        <img className="w-[32px] h-[32px] cursor-pointer" src={arrowLeft} alt="" />
        
    </div>

    <div className="visible sm:invisible bg-[#F3F4F4] profile w-full pt-5">
<img className="w-[90px] h-[90px]" src={profileImg} alt="" />
<p className="text-[18px] font-bold new_york_medium_font">
    John Smith
            </p>
            <button className="subscribe mt-[10px] mb-[20px] sp_pro_text_medium_font">Premium subscriber</button>
    </div>


    {/* <!-- item --> */}
    <div className="visible sm:invisible bg-[#F3F4F4] mt-2 mb-5 ml-3 mr-3 p-[16px] flex justify-between items-center">
        <div className="flex justify-start">
            <img src={supplementsImg} alt="" />
            <span className="new_york_medium_font text-[18px] pl-5">My Supplements</span>
        </div>
<div>
    <img src="images/right_arrow.svg" alt="" />
</div>
    </div>
      {/* <!-- end item --> */}

       {/* <!-- item --> */}
    <div className="visible sm:invisible bg-[#F3F4F4] mt-2 mb-1 ml-3 mr-3 p-[16px] flex justify-between items-center">
        <div className="flex justify-start">
            <img src={accountImg} alt="" />
            <span className="new_york_medium_font text-[18px] pl-5">Account Settings</span>
        </div>
<div>
    <img src="images/right_arrow.svg" alt="" />
</div>
    </div>
      {/* <!-- end item --> */}

       {/* <!-- item --> */}
    <div className="visible sm:invisible bg-[#F3F4F4] mt-2 mb-1 ml-3 mr-3 p-[16px] flex justify-between items-center">
        <div className="flex justify-start">
            <img src={supportImg} alt="" />
            <span className="new_york_medium_font text-[18px] pl-5">Support</span>
        </div>
<div>
    <img src="images/right_arrow.svg" alt="" />
</div>
    </div>
      {/* <!-- end item --> */}

      {/* <!-- item --> */}
    <div className="visible sm:invisible bg-[#F3F4F4] mt-2 mb-1 ml-3 mr-3 p-[16px] flex justify-between items-center">
        <div className="flex justify-start">
            <img src={faqImg} alt="" />
            <span className="new_york_medium_font text-[18px] pl-5">FAQ</span>
        </div>
<div>
    <img src="images/right_arrow.svg" alt="" />
</div>
    </div>
      {/* <!-- end item --> */}
   
      
    <div className="visible sm:invisible bg-[#F3F4F4] mt-2 mb-1 ml-3 mr-3 p-[16px] flex justify-between items-center">
        <div className="flex justify-start">
            <img src={termsImg} alt="" />
            <span className="new_york_medium_font text-[18px] pl-5">Terms & Privacy Policy</span>
        </div>
<div>
    <img src="images/right_arrow.svg" alt="" />
</div>
    </div>
  

      <div className="visible sm:invisible profile_buttons">
        <button className="uppercase text-[#06224B] text-[14px] sp_pro_text_medium_font font-bold">Logout</button>

        <button className="uppercase text-[#FF4003] text-[14px] sp_pro_text_medium_font font-bold">Delete my data</button>
      </div>
        </>
    )
}

export default ProfilePage;