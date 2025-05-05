import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import '../components/Navbar.css'

const SignupForm = ({setIsLoggedIn}) => {
  const navigate= useNavigate()

const[formData,setFormData] =useState({
   firstname:"",
   lastname:"",
   email:"",
   password:"",
   confirmpassword:""
})
   function changeHandler(event){
  setFormData((prev)=>(
    {
    ...prev,
    [event.target.name]:event.target.value,
    }
  ));
   }
   const [showPassword, setShowPassword] = useState({
    // createPassword: false,
    // confirmPassword: false,
  });
  function submitHandler(event){
    event.preventDefault();
    if(formData.password !== formData.confirmpassword){
      toast.error("password doesn't match!..");
      return;
    }
    setIsLoggedIn(true);
      toast.success("account Created successfully!..")

      navigate("/dashboard")

  }

  return (
    <div className='content'>
    
      


<form onSubmit={submitHandler} className='form-main'>
<div>
{/* first name or last name */}
  <label>
    <p className='heading'>FirstName<sup>*</sup></p>
    <input required type='text'
    name="firstname"
    placeholder='Enter your first name'
    onChange={changeHandler}
    value={formData.firstname}
    className='text'
    />
  </label>

  <label>
    <p>lastname<sup>*</sup></p>
    <input required type='text'
    name="lastname"
    placeholder='Enter your last name'
    onChange={changeHandler}
    value={formData.lastname}
    className='text'
    />
  </label>
  </div>

  {/* email Address */}

  <label>
    <p>Email Address<sup>*</sup></p>
    <input required type='text'
    name="email"
    placeholder='Enter your email'
    onChange={changeHandler}
    value={formData.email}
    className='text'
    />
  </label>


  {/* create password */}
  <div>
  <label>
    <p>Create Passowrd<sup>*</sup></p>
    <input required type={showPassword ? ("text"): ("password")}
    name="password"
    placeholder='Enter your password'
    onChange={changeHandler}
    value={formData.password}
    className='text'
    />
    <span onClick={()=>setShowPassword((prev)=>!prev)}>
        {
            showPassword ? 
        (<AiOutlineEyeInvisible/>):
        (<AiOutlineEye/>)}
    </span>
  </label>


  <label>
    <p>Confirm Passowrd<sup>*</sup></p>
    <input required type={showPassword ? ("text"): ("password")}
    name="confirmpassword"
    placeholder='Enter your password'
    onChange={changeHandler}
    value={formData.confirmpassword}
    className='text'
    />
    <span onClick={()=>setShowPassword((prev)=>!prev)}>
        {
            showPassword ? 
        (<AiOutlineEyeInvisible/>):
        (<AiOutlineEye/>)}
    </span>
  </label>
  </div>
  <button className='create'>
    Create Account
  </button>
  
</form>

    </div>
  )
}

export default SignupForm
