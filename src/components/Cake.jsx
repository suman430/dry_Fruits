import React from 'react'
import '../components/Navbar.css'

const Cake = () => {
  return (
    <div>
      <section class="container mx-auto px-6 py-12 lg:py-20 flex flex-col-reverse lg:flex-row items-center gap-10">
        
     
        <div class="lg:w-1/2 text-center lg:text-left">
            
            
            <h1 class="text-4xl lg:text-6xl font-bold mt-3">
                The Ideal <span class="text-red-500 italic underline">Prepared</span> Cake Regular!
            </h1>

            <p class="text-gray-600 text-lg mt-4">
                These cakes are made with butter or another fat, like vegetable shortening. 
                The common way is to mix the fat and sugar, then add eggs, and then add flour.
            </p>

           
            <div class="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#" class="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600" className='btn-cake1 '>Read More</a>
                <a href="#" class="border border-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100" className='btn-cake'>Order Now</a>
            </div>
        </div>

        
        <div class="lg:w-1/2 flex justify-center">
            <img src="https://t4.ftcdn.net/jpg/03/08/40/43/360_F_308404381_LqyMIXDPOR6Ut1TqE2cJRQdxomGsQegc.jpg" alt="Cake Image" class="max-w-full rounded-lg shadow-lg" id='image'/>
        </div>
        <div class="flex items-center gap-2 text-red-500 font-semibold text-lg">
                <span>🔴</span> 
                </div>

    </section>
    </div>
  )
}

export default Cake;
