import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import useStore from "../../store/store";

import loginLogo from '../../assets/login_logo.svg';
import loginCloseIcon from '../../assets/login_close.svg';
import emailIcon from '../../assets/email.svg';

// interface Props {
//     setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
// }

const LoginPage = () => {

    const navigate = useNavigate();

    const { isAuth, setIsAuth } = useStore();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [email, setEmail] = useState<string>('');
    const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
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
        axios.get(base_token_url + `?code=${code}&email=${email}`, {
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
        <div className="login flex flex-col items-center pr-5 pl-5">

{
    isEmailSent != true && (
        <>
        <img className="login_logo" width={78} height={38} src={loginLogo} alt="" />
        <img className="fixed top-[74px] right-1" src={loginCloseIcon} alt="" />

     <h1 className="uppercase text-[#F3F4F4] text-[38px] druk_cyr_heavy_font pt-5">enter the email that is <br /> linked to your account</h1>

     <form  method="POST"
            onSubmit={emailHandler}
            className="">  
   <label htmlFor="search" className=" text-sm font-medium text-gray-900 dark:text-white pt-20 sr-only">Enter your email</label>
    <div className="relative">
 <p className="absolute start-2.5 top-[1px]">Enter your email</p>
        {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div> */}

        <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        

<img className="absolute end-2.5 bottom-2.5 px-4 py-2" src={emailIcon} alt="" />

        {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}

    </div>
    </form>

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
            <form method="GET"
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
            </form>

    )
}
          

        </div>
        </>
        )
    }


    

export default LoginPage;