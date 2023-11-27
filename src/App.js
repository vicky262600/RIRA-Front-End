import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile"

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  
  return (
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/profile/:username' element={<Profile/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  );
}

export default App;
