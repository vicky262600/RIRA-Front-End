import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile"

import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import axios from 'axios';

axios.get('https://rira-api.vercel.app/api/some-endpoint')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));


function App() {
  const {user} = useContext(AuthContext)
  return (
    <Routes>
      <Route path='/' element={user ? <Home/> : <Register/>} />
      <Route path='/profile/:username' element={<Profile/>}/>
      <Route path='/register' element={user ? <Navigate to="/" /> : <Register/>}/>
      <Route path='/login' element={user ? <Navigate to="/" /> : <Login/>}/>
    </Routes>
  );
}

export default App;