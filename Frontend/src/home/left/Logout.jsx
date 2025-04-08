import React from 'react'
import { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import axios from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

const Logout = () => {
    const [loading , setLoading] = useState(false);
    const handleLogout = async () =>{
        setLoading(true);
        try {
            const res = await axios.post(`${import.meta.env.VITE_HOST}/api/user/logout`,{withCredentials: true});
            localStorage.removeItem("ChatApp");
            Cookies.remove("jwt");
            setLoading(false);
            toast.success("Logout successfully");
            window.location.reload();
            
        } catch (error) {
            console.log("errro in logout",error);
            
        }
    }
    return (
        <div className='h-[10vh]'>
           <div>
            <CiLogout className='text-5xl text-white hover:bg-slate-700 rounded-full cursor-pointer duration-300 p-2 mt-1 ml-2'
            onClick={handleLogout} />
           </div>
        </div>
    )
}

export default Logout
