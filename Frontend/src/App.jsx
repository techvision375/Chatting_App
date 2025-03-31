import React from 'react'
import Left from './home/left/Left'
import Right from './home/right/Right'
import './index.css';
import Signup from './componants/signup';
import Login from './componants/Login';

const App = () => {
  return (
    <div className='flex h-screen '>
      {/* <Left/>
      <Right/> 
      <Login/> */}
      <Signup/>
    </div>
  )
}

export default App
// node --watch index.j