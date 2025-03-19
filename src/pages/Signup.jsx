import React from 'react'
import Template from "../components/Template";
import signup from '../assets/signup.png'

export default function Signup({setIsLoggedIn}) {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      des1="Build skills for today, tomorrow, and beyond."
      des2="Education to future-proof your career."
      image={signup}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}
