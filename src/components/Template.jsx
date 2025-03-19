import React from 'react'
import { FcGoogle } from "react-icons/fc";
import frame from "../assets/frame.png";
import SignupForm from "../components/SignupForm"
import LoginForm from "../components/LoginForm"
import '../components/Navbar.css'

const Template = ({title, des1, des2, image,formtype, setIsLoggedIn}) => 
  {
  return (
    <div>
    <div>
      <h1>{title}</h1>
      <p>
        <span>{des1}</span>
        <span>{des2}</span>
      </p>
      {formtype==="signup"?
      (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
      (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
      </div>


<div>
  <div></div>
  <p>OR</p>
  <div></div>
</div>

<div className='sign'> 
<button  className='logo'>
<FcGoogle />
  <p className='up'>Sign Up with  Google</p>
</button>
</div>



<div><img src={frame} 
alt="patter" width={558}
 height={504}
  loading="lazy"
 />
  <img
          src={image}
          alt="patter"
          width={558}
          height={504}
          loading="lazy"/>
</div>

    </div>


  )
}

export default Template

