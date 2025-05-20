import { useNavigate } from "react-router";


export const logout = () => {
    const navigate = useNavigate();
    localStorage.removeItem("uid");
    navigate('/login');

}