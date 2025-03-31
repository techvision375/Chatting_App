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

      <Users />

      <Logout />
    </div>
  )
}

export default Left
