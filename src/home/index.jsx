import React from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'

const Home = () => {
  const navigate = useNavigate();

  const handleSignin = () => {

    navigate('/signin')

  }
  const handleSignup = () => {

    navigate('/signup')

  }
  return (
    <div className='home'>
      <h1>Welcome to my web</h1>
      <p>New here? Join our community by signing up or sign in if you're already a member.</p>
      <div className='home-btn'>
        <button onClick={handleSignin}>SignIn</button>
        <button onClick={handleSignup}>SignUp</button>
      </div>
    </div>
  )
}

export default Home;
