import React from 'react'
import toast from 'react-hot-toast'

import "../pages/Link.css";
export default function Link() {
    function changehandler(){
        toast.success("Add to card");
      }
  return (
    <div>
    <div class="product-container">
        <div class="product">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg-Y6Mn77XeqIYltRWspXGrEtMJdojmfRDsA&s" alt="Anand Mysore Pak"/>
            <h3>Anand Mysore Pak</h3>
            <p>₹225</p>
            <select>
                <option>200g</option>
            </select>
            <button>Add to cart</button>
        </div>

        <div class="product">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu1n2aS-JrpZ1HxynrMXo2UMZAUEvN-kqxjQ&s" alt="Motichur Laddu"/>
            <h3>Motichur Laddu</h3>
            <p>₹195</p>
            <select>
                <option>200g</option>
            </select>
            <button onClick={changehandler}>Add to cart</button>
        </div>

        <div class="product">
            <img src="https://www.anandsweets.in/cdn/shop/files/JHEELBATTIBack.jpg?v=1702018651&width=940" alt="Kaju Katli"/>
            <h3>Kaju Katli</h3>
            <p>₹325</p>
            <select>
                <option>200g</option>
            </select>
            <button>Add to cart</button>
        </div>

        <div class="product">
            <img src="https://images.unsplash.com/photo-1591123220262-87ed377f7c08?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sugar Free Kaju Katli"/>
            <h3>Sugar Free Kaju Katli</h3>
            <p>₹390</p>
            <select>
                <option>200g</option>
            </select>
            <button>Add to cart</button>
        </div>
    </div>
    </div>
  )
}
