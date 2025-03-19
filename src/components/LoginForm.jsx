import React from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import toast from 'react-hot-toast';
import '../components/Navbar.css'

const LoginForm = ({setIsLoggedIn}) => {

    const navigate= useNavigate();
    function changeHandler(event) {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("logged In");
    navigate("/dashboard");
    navigate("/logout");
    
    }
  return (
    <div>
    
<form onSubmit={submitHandler}  className='form-main' >
    <label >
        <p>Email Address<sup>*</sup></p>

        <input required
        type="text"
        value={formData.email}
        onChange={changeHandler}
        name='email'
         className='text'
        placeholder="Enter email id"/>

    </label>

    <label id='email'>
        <p>Password <sup>*</sup></p>
        <input type={showPassword ? 'text':"password"}
        required
        value={formData.password}
        placeholder="Enter your Passowrd"
        onChange={changeHandler}
         className='text'
        name='password'></input>
    

<span onClick={()=>setShowPassword((prev)=>!prev)}>
    {
        showPassword ? 
    (<AiOutlineEyeInvisible/>):
    (<AiOutlineEye/>)}
</span>

<Link to="#">

<p>
    Forget Passowrd
</p>
</Link>

</label>
<button className='user-btn'>
                Sign in
            </button>

</form>

    
      
    </div>
  )
}

export default LoginForm
