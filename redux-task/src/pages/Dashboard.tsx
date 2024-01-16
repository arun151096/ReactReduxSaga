import { useSelector } from "react-redux"
import { State } from "../redux/reducer"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const Dashboard = () => {

   const user = useSelector((state: State) => state.user);
   const navigate = useNavigate();

   useEffect(() => {
    if(!user) {
        navigate('/login');
    }
   }, [user]);

    return <>
        <h1>Dashboard:  Hello {user?.name} !</h1>
    </>
}