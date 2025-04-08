import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';
import useGetAllUsers from '../../context/useGetAllUsers';
import useConversation from '../../zustand/UseConversation';

const Search = () => {
    const [search, setSearch] = useState("");
    const [allUsers] = useGetAllUsers();
    const { setselectedConversation } = useConversation();
    const handlesumbit = (e) => {
        e.preventDefault();
        if(!search) return;
        const conversation = allUsers.find((user) => user.fullname?.toLowerCase().includes(search.toLowerCase()));

        if (conversation) {
            setselectedConversation(conversation);
            setSearch("");
        }
        else{
            alert("No user found with this name")
            setSearch("");
        }
    };

    return (

        <div className='h-[10vh]'>
            <div className='px-6 py-4'>
                <form onSubmit={handlesumbit}>
                    <div className='flex space-x-3'>
                        <label className="border-[1px] border-gray-700 bg-slate-900 rounded-lg p-3 flex items-center gap-2 w-[80%]">
                            <input type="text" className='grow outline-none bg-transparent' placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />

                        </label>
                        <button>
                            <IoIosSearch className='text-5xl p-2 hover:bg-gray-600 rounded-full duration-300' />
                        </button>
                    </div>
                </form>
            </div>
        </div>


    )
}

export default Search
