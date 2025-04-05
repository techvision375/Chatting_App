import React from 'react'
import Left from './home/left/Left'
import Right from './home/right/Right'
import './index.css';
import Signup from './componants/signup';
import Login from './componants/Login';
import { useAuth } from './context/AuthProvider';
import { Navigate, Route ,Routes } from 'react-router-dom'
import Loading from './componants/Loading';

const App = () => {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)
  return (

    // 
    // <Signup/>
    <Routes>
      <Route path="/" element={
        authUser ? (<div className='flex h-screen '>
          <Left />
          <Right />
        </div>) : (<Navigate to="/login" />)
      } />
      <Route path="/login" element={ authUser ? <Navigate to="/"/> : <Login />} />
      <Route path="/signup" element={authUser ? <Navigate to="/"/> : <Signup />} />

    </Routes>
    // <Loading/>
  )
}

export default App
// node --watch index.j