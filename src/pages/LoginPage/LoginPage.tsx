import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import useStore from "../../store/store";
import useDigitInput from 'react-digit-input';

import loginLogo from '../../assets/login_logo.svg';
import loginCloseIcon from '../../assets/login_close.svg';
import emailIcon from '../../assets/email.svg';
import eraseEmailIcon from '../../assets/erase_email.svg';

// interface Props {
//     setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
// }

const LoginPage = () => {

    const navigate = useNavigate();

    const { isAuth, setIsAuth } = useStore();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [value, onChange] = useState('');
    const digits = useDigitInput({
    acceptedCharacters: /^[0-9]$/,
    length: 6,
    value,
    onChange,
  });

    const [email, setEmail] = useState<string>('');
    const [isEmailSent, setIsEmailSent] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const [code, setCode] = useState<string>('');

    useEffect(() => {
        if (isAuth === true) {
            navigate('/');
        }
    }, [isAuth])


    const emailHandler = (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        axios.post(import.meta.env.VITE_API_VERIFY_EMAIL_URL,
            {
                "email": email
            }
            ,
            {
            headers: {
                 'Authorization': `Token ${import.meta.env.VITE_API_TOKEN}`,
                 'Content-Type': 'application/json',
            }
        }).then((response: any) => {
            console.log('DATA FROM SERVER FROM EMAIL:', response.data);
            setIsEmailSent(true);
            setIsLoading(false);
        }).catch(error => {
    console.error('Error for email sending handler: ', error);
    setError(error);
      setIsLoading(false);
});

    }


const codeHandler = (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        const base_token_url = import.meta.env.VITE_API_VERIFY_TOKEN_CODE_BASE_URL;
        axios.get(base_token_url + `?code=${value}&email=${email}`, {
             headers: {
                 'Authorization': `Token ${import.meta.env.VITE_API_TOKEN}`,
                
            }
        }).then((response: any) => {
              console.log('RESPONSE FROM SERVER FROM CODE:', response);
              setEmail('');
              setCode('');
              localStorage.setItem("uid", response.data.uid);
              setIsAuth(true);
            
              navigate('/');
        }).catch(error => {
    console.error('Error for code sending handler: ', error);
    setError(error);
     setIsLoading(false);
}); 
}

    if (isLoading === true) {
        return (
            <div className="main_container">
          <h1>Loading</h1>
          </div>
        )
    }

 

      return (
 <>
        <div className="login flex flex-col items-center pr-5 pl-5 ">

{
    isEmailSent != true && (
        <>
        <img className="login_logo" width={78} height={38} src={loginLogo} alt="" />
        <img className="fixed top-[74px] right-1" src={loginCloseIcon} alt="" />

     <h1 className="uppercase text-[#F3F4F4] text-[38px] druk_cyr_heavy_font pt-5">enter the email that is <br /> linked to your account</h1>

     <form  method="POST"
            onSubmit={emailHandler}
            className="w-[300px] pt-7">  
   <label htmlFor="search" className=" text-sm font-medium text-gray-900 dark:text-white pt-20 sr-only">Enter your email</label>
    <div className="relative">
 <p className="absolute start-2.5 top-[10px] text-[#B4B7B5] text-[10px] sp_pro_text_medium_font tracking-[10%] uppercase leading-[12px]">Enter your email</p>
        {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div> */}

        <input
        onChange={(e: any) => setEmail(e.target.value) }
        type="email" id="email" className="block w-full text-sm pt-5 mb-2 pb-5 pl-2 new_york_font text-[16px] text-[#141D19] border bg-white" placeholder=""value={email} required />
        
{
    email.length > 0 ? <img className="absolute end-2.5 bottom-2.5 px-0 py-3 cursor-pointer" src={eraseEmailIcon} onClick={() => setEmail('')} alt="" /> : <img className="absolute end-2.5 bottom-2.5 px-0 py-3" src={emailIcon} alt="" />
}


        {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}

    </div>

{
    email.length > 6 ? <button className=" visible bg-[#FF6D03] text-[#FFFFFF] text-[14px] sp_pro_text_medium_font font-bold the_content_button pt-[18px] pb-[18px] uppercase cursor-pointer rounded-sm sf_pro_display_medium_font tracking-[6%] leading-[20px]">Continue</button> : <button className=" visible bg-[#2B3330] text-[#565C59] text-[14px] sp_pro_text_medium_font font-bold the_content_button pt-[18px] pb-[18px] uppercase cursor-pointer rounded-sm sf_pro_display_medium_font tracking-[6%] leading-[20px]">Continue</button>
}
   
    </form>


 <p className="text-[14px] text-[#D2D4D3] tracking-[6%] leading-[20px] sp_pro_text_medium_font uppercase pt-3">Need Help Logging In? <br />
please contact &nbsp; 
<Link className="support" to="/support" target="_blank" >
support
</Link>

</p>

<p className="text-[14px] text-[#D2D4D3] tracking-[6%] leading-[20px] sp_pro_text_medium_font uppercase pt-3">If you don't have an account, <br />
<Link className="support" to="/start" target="_blank" >
please start here
</Link>
</p>



   

            {/* <form method="POST"
            onSubmit={emailHandler}
            className="">
                <input
                onChange={(e: any) => setEmail(e.target.value) }
                className="border-blue-500 w-50 p-2" type="email" placeholder="johndoe@example.com" required />
                <button disabled={!email} className="bg-blue-500 text-white w-50 p-2 cursor-pointer">Submit</button>
                {
                    !!error && (
                        <p className="text-red-600">Error occured!</p>
                    )
                }
            </form> */}

   </>
    )
}

{
    isEmailSent === true && (
        <>
          <img className="login_logo" width={78} height={38} src={loginLogo} alt="" />
        <img className="fixed top-[74px] right-1" src={loginCloseIcon} alt="" />

  <h1 className="uppercase text-[#F3F4F4] text-[38px] druk_cyr_heavy_font pt-5">enter security code</h1>

<p className="text-[18px] text-[#D2D4D3] tracking-[6%] leading-[20px] sp_pro_text_medium_font pt-3">An email with a code has been sent to: youremail@example.com
</p>

 <div className="input-group flex digital_number">
        <input className="flex flex-row justify-center items-center" inputMode="decimal" autoFocus {...digits[0]} />
        <input inputMode="decimal" {...digits[1]} />
        <input inputMode="decimal" {...digits[2]} />
        {/* <span className="hyphen" /> */}
        <input
        // onChange={codeHandler}
        inputMode="decimal" {...digits[3]} />
      </div>

<p className="text-[18px] text-[#D2D4D3] tracking-[6%] leading-[20px] new_york_medium_font pt-3">Didn't receive the code? <br />
 <Link className="resend sp_pro_text_medium_font uppercase" to="/start" target="_blank" >
resend code
</Link>
</p>



  {/* <form method="GET"
            onSubmit={codeHandler}
            className="w-100 h-100 flex flex-col gap-3 justify-center items-center">
                <input
                 onChange={(e: any) => setCode(e.target.value) }
                className="border-blue-500 w-50 p-2" type="text" placeholder="12345" required />
                <button disabled={code.length < 4} className="bg-blue-500 text-white w-50 p-2 cursor-pointer">Send the code</button>
                 {
                    !!error && (
                        <p className="text-red-600">Error occured!</p>
                    )
                }
            </form> */}


        </>
          

    )
}
          

        </div>
        </>
        )
    }


    

export default LoginPage;