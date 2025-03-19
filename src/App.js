
import Navbar from './components/Navbar';
import './App.css';
import {Routes,Route} from "react-router-dom"

import Link from './pages/Link';
import Home from './pages/Home';
import DryFuits from './pages/DryFuits';
import  Gift from "./pages/Gift.jsx"
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Logout from './pages/Logout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { useState } from 'react';
import Namkeen from './components/Cake.jsx';
import About from './pages/About.jsx';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
  <div className='w-screen h-screen bg-richblack-900 flex flex-col' >
       <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    <div className="App">
<Routes>
<Route path="/home" element={<Home/>}/>
<Route path="/link" element={<Link/>}/>
<Route path="/dryfruits" element={<DryFuits/>}/>
<Route path="/gift" element={<Gift/>}/>
<Route path="/cake" element={<Namkeen/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/gift" element={<Gift/>}/>

<Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
<Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
<Route path="/logout" element={<Logout/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
</Routes>
</div>
  </div>
  );
}

export default App;
