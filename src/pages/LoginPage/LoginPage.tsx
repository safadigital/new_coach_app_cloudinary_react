import { useState } from "react";

const LoginPage = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [isEmailSent, setIsEmailSent] = useState<boolean>(false);

    const [code, setCode] = useState<string>('');


    const emailHandler = (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        axios.post(`http://content-dev.the.coach/api/v1/user/web/verify_email/`,
            {
                "email": email
            }
            ,
            {
            headers: {
                'Authorization': '',
                 'Content-Type': 'application/json',
            }
        }).then((response: any) => {
            console.log('DATA FROM SERVER FROM EMAIL:', response.data);
            setIsEmailSent(true);
            setIsLoading(false);
        }).catch(error => {
    console.error('Error for email sending handler: ', error);
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
        <div className="main_container">

{
    isEmailSent != true && (
            <form
            onSubmit={emailHandler}
            className="w-100 h-100 flex flex-col gap-3 justify-center items-center">
                <input
                onChange={(e: any) => setEmail(e.target.value) }
                className="border-blue-500 w-50 p-2" type="email" placeholder="johndoe@example.com" required />
                <button disabled={!email} className="bg-blue-500 text-white w-50 p-2 cursor-pointer">Submit</button>
            </form>

    )
}

{
    isEmailSent === true && (
            <form className="w-100 h-100 flex flex-col gap-3 justify-center items-center">
                <input
                 onChange={(e: any) => setCode(e.target.value) }
                className="border-blue-500 w-50 p-2" type="text" placeholder="12345" required />
                <button disabled={code.length < 6} className="bg-blue-500 text-white w-50 p-2 cursor-pointer">Send the code</button>
            </form>

    )
}
          

        </div>
        </>
        )
    }


    

export default LoginPage;