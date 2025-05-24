import loginCloseIcon from '../../assets/login_close.svg';

const LoginLoader = () => {


    return (
        <>
        <div className="flex w-full h-[100vh] bg-[#141D19FA] justify-center items-center">
             <img className="fixed top-[74px] right-1" src={loginCloseIcon} alt="" />
   <div className="login_loader"></div>
        </div>
     
        </>
    )


}

export default LoginLoader;