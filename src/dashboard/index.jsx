import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);

    navigate('/')

  }
  return (
    <div>
      <h1>Welcome to my web</h1>
      <p>This is my firebase login page project</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard;