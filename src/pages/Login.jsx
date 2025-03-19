import React from 'react'
import Template from "../components/Template";
import login from "../assets/login.png";

export default function Login({setIsLoggedIn}) {
  return (
    <Template
    title="Welcome Back"
    des1="Build skills for today, tomorrow, and beyond."
    des2="Education to future-proof your career."
    image={login}
    formtype="login"
    setIsLoggedIn={setIsLoggedIn}
  />
  )
}
