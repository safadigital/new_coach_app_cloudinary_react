import { useState } from "react";

const LoginPage = () => {

    const [email, setEmail] = useState<string>('');
    const [code, setCode] = useState<string>('');

    return (
        <>
        <div className="main_container">

{
    email.length < 1 && (
            <form className="w-100 h-100 flex flex-col gap-3 justify-center items-center">
                <input className="border-blue-500 w-50 p-2" type="email" placeholder="johndoe@example.com" required />
                <button disabled={!email} className="bg-blue-500 text-white w-50 p-2">Submit</button>
            </form>

    )
}
          

        </div>
        </>
    )
}

export default LoginPage;