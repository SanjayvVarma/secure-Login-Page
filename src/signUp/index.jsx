import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import './style.css'

const SingUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User signed up successfully:");
      navigate('/signin')

    } catch (error) {
      alert("You have entered incorrect details. Please enter correct details.");
    }
  };

  return (
    <div className='signup'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div>
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Sign Up</button>

      </form>
      <p>Need to SignIn ? <Link className='signup-link' to="/signin">SignIn</Link></p>
    </div>
  );
};

export default SingUp;


