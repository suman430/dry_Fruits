import React from 'react'
import Template from "../components/Template";
import login from "../assets/login.png";

export default function Login({setIsLoggedIn}) {
  return (
    <Template
    title="Welcome Back"
    des1="A confectionery store or confectionery shop (more commonly referred to as a sweet shop in the United Kingdom, a candy shop or candy store in North America, or a lolly shop in Australia and New Zealand) is a store that sell confectionery, whose intended targeted marketing audiences are children and adolescents.
"
    des2="Jalebi is a crispy, pretzel-shaped sweet made from deep-fried batter and soaked in sugar syrup, while Gulab Jamun are soft, milk-based balls soaked in sugar syrup"
    image={login}
    formtype="login"
    setIsLoggedIn={setIsLoggedIn}
  />
  )
}
