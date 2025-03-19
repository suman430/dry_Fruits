import React from 'react'
import { Link} from 'react-router-dom'
import  { toast } from 'react-hot-toast';
import "../components/Navbar.css";

export default function Navbar(props) {
 

const notify = () => toast('Here is your toast.');
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  return (
    <>
     <div>
     <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start mb-4">
       
     <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
         <img src='chocolate.png' width={100}></img>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/shop" class="nav-link px-2 text-secondary">
          <Link to="/home" id='navlink'> Shop All</Link> </a></li>
          

         


          <li><a href="#" class="nav-link px-2 text-white"><Link to="/link"  id='navlink'>Sweets</Link>
          </a></li>
          <li><a href="#" class="nav-link px-2 text-white"> <Link to="/cake" id='navlink'>
          Cake
          </Link></a></li>
          <li><a href="#" class="nav-link px-2 text-white">
          
          <Link to="/dryfruits" id='navlink'>Dry Fruit</Link>
          </a></li>
          <li><a href="#" class="nav-link px-2 text-white">
          
          <Link to="/gift" id='navlink'>GIfting</Link>
          </a></li>




          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false" id='about-link'>About Us</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">
              <Link to="/about" id='navlink'>  About Us</Link>
            </a></li>
              <li><a class="dropdown-item" href="#">   <Link to="/about" id='navlink'>Our Brands</Link></a></li>
              <li><a class="dropdown-item" href="#">Global Footprint</a></li>
            </ul>
          </li>




        </ul>

       

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-light" placeholder="Search..." aria-label="Search"/>
        </form>

        <div class="text-end">
        { !isLoggedIn &&
          <button type="button" class="btn btn-outline-light me-2" > <Link to="/login" id='navlink'>Login</Link></button>
        }
        { !isLoggedIn &&
          <button type="button" class="btn btn-warning" 
          > <Link to="/signup" id='navlink'>Sign-up</Link></button>
        }

{isLoggedIn &&
          <button type="button" class="btn btn-outline-light me-2 mx-2" onClick={() => {
              setIsLoggedIn(false)
              toast.success("Logged out");}}
               > <Link to="/logout" id='navlink'>Logout</Link></button>
}
{ isLoggedIn &&
          <button type="button" class="btn btn-warning"> <Link to="/dashboard" id='navlink'>Dashboard</Link></button>
}
        </div>
      </div>
     </div>
    </>
  )
}


