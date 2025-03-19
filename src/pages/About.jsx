import React from 'react'
import '../components/Navbar.css'

const About = () => {
  return (
    <div>
       <div className="bg-[#f9f6ef] py-12 px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-between">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:w-2/3">
        <img
          src="https://english.cdn.zeenews.com/sites/default/files/2024/10/10/1542404-hamperhomefreepik.jpg"
          alt="Snack 1"
          className="rounded-lg shadow-lg" id='image'
        />
      </div>

      <div className="lg:w-1/3 text-center lg:text-left mt-8 lg:mt-0">
        <h2 className="text-3xl font-bold text-gray-800">
          Presenting Anand’s Signature Brands
        </h2>
        <p className="text-gray-600 mt-2">
          The art of flavor, mastered and remastered.
        </p>
        <button className="mt-4 bg-[#caa660] text-black font-semibold py-2 px-6 border-[30px] rounded hover:bg-[#b89555]">
          SHOP NOW
        </button>
      </div>
    </div>
  
    </div>
  )
}

export default About
