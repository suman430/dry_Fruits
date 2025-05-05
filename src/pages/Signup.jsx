import React from 'react'
import Template from "../components/Template";
import signup from '../assets/signup.png'

export default function Signup({setIsLoggedIn}) {
  return (
    <Template
      title="BUY GET ONE FREE!!"
      des1="onsidered an icon among Indian sweets, Gulaab Jamun holds a special place in the hearts of Indians. These melt-in-your-mouth deep-fried dough balls soaked in sugar syrup are a staple on every festive menu."
      des2="."
      image={signup}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}
