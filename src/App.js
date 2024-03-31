
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SingUp from './signUp';
import Home from './home';
import SingIn from './signIn';
import Dashboard from './dashboard';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route index path='/' element={<Home />} />
        <Route path='/signup' element={<SingUp />} />
        <Route path='/signin' element={<SingIn />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;




