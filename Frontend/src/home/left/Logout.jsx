import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

const Logout = () => {
    return (
        <div className='h-[10vh]'>
           <div>
            <CiLogout className='text-5xl text-white hover:bg-slate-700 rounded-full cursor-pointer duration-300 p-2 mt-1 ml-2' />
           </div>
        </div>
    )
}

export default Logout
