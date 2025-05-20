import { useState } from "react";

const LoginPage = () => {

    const [email, setEmail] = useState<string>('');
    const [isEmailSent, setIsEmailSent] = useState<boolean>(false);

    const [code, setCode] = useState<string>('');

    return (
        <>
        <div className="main_container">

{
    isEmailSent != true && (
            <form className="w-100 h-100 flex flex-col gap-3 justify-center items-center">
                <input className="border-blue-500 w-50 p-2" type="email" placeholder="johndoe@example.com" required />
                <button disabled={!email} className="bg-blue-500 text-white w-50 p-2 cursor-pointer">Submit</button>
            </form>

    )
}

{
    isEmailSent === true && (
            <form className="w-100 h-100 flex flex-col gap-3 justify-center items-center">
                <input className="border-blue-500 w-50 p-2" type="text" placeholder="12345" required />
                <button disabled={code.length < 6} className="bg-blue-500 text-white w-50 p-2 cursor-pointer">Send the code</button>
            </form>

    )
}
          

        </div>
        </>
    )
}

export default LoginPage;