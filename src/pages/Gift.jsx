import React from 'react'
import '../components/Navbar.css'
import toast from 'react-hot-toast'

const Gift = () => {

function changehadler(){
  toast.success("Add to card");
}

  return (
    <div className='box'>
     <div className='gift-img'>
      <img src="https://bombaysweetshop.com/cdn/shop/files/Frame_233.jpg?v=1653721627"></img>
     </div>
     <div>
     <div className="lg:w-1/3 text-center lg:text-left mt-8 lg:mt-0">
        <h2 className="text-3xl font-bold text-gray-800">
          Presenting Anand’s Signature Brands
        </h2>
        <p className="text-gray-600 mt-2">
          The art of flavor, mastered and remastered.
        </p>
        <button className="mt-4 bg-[#caa660] text-black font-semibold py-2 px-6 border-[30px] rounded hover:bg-[#b89555]" id='add-to-card' onClick={changehadler}>
          Add to Card
        </button>
      </div>
     </div>
    </div>
  )
}

export default Gift

