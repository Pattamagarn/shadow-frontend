import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { RiAccountCircleLine } from "react-icons/ri";
import NavbarAdmin from '../../components/navbar/NavbarAdmin'
import navbarGuest from '../../components/navbar/NavbarGuest'
import NavbarMember from '../../components/navbar/NavbarMember'
import axios from 'axios';
import NavbarGuest from '../../components/navbar/NavbarGuest';


const Navigation = () => {
    const navigate = useNavigate()
    const [isLogin,setIslogin] = useState('')
    const [role,setRole] = useState('')

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/authentication-account`, {withCredentials: true})
        .then((response) => {
            if(response.data.status){
                setIslogin(response.data.payload)
           }
           if(!response.data.payload.email){
                setRole('Guest')
           }
        })
    },[])




    return(
        <>
            <NavbarMember/>
            {/* {role.length > 1 ? <NavbarGuest/> : isLogin.role ? <NavbarAdmin/> : <NavbarMember/>} */}
        </>
        
    )
}

export default Navigation;