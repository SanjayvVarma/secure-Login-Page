import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { auth } from '../firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth'
import './style.css'

const SingIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("User signed in successfully:");
      navigate('/dashboard')

    } catch (error) {
      alert("You have entered incorrect details. Please enter correct details.");

    }
  };

  return (
    <div className='signin'>
      <h2>Sign In</h2>
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
        <button type="submit">Sign In</button>

      </form>
      <p>Need to SignUp ? <Link className='singnin-link' to="/signup">SingUp</Link></p>
    </div>
  );
};

export default SingIn;