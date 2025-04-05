import React from 'react'
import Search from './Search'
import User from './User'
import Users from './Users'
import Logout from './Logout'

const Left = () => {
  return (
    <div className='w-[30%] bg-black ' >
      <Search />
      <br />

      <div className='flex-1 overflow-y-auto' style={{ minHeight:"calc(82vh - 10vh)" }}>
     <Users/>
     </div>

      <Logout />
    </div>
  )
}

export default Left
