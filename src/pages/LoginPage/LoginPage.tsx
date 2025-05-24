import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import useStore from "../../store/store";

import loginLogo from '../../assets/login_logo.svg';
import loginCloseIcon from '../../assets/login_close.svg';

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
        {/* <div className="flex"> */}
        <img className="login_logo" width={78} height={38} src={loginLogo} alt="" />

        <img className="fixed top-[74px] right-1" src={loginCloseIcon} alt="" />
{/* </div> */}
     <h1 className="uppercase text-[#F3F4F4] text-[38px] druk_cyr_heavy_font pt-5">enter the email that is <br /> linked to your account</h1>

            <form method="POST"
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
            </form>
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