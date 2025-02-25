import React from 'react'
import Innovative from '../../assets/Svg/multi fun-01.svg'
import Maintainace from '../../assets/Svg/free-01.svg'
import High from '../../assets/Svg/durable-01.svg'
import Save from '../../assets/Svg/save energy-01.svg'
import Multi from '../../assets/Svg/pocket-knife_6090179-01.svg'
import Health from "../../assets/Svg/healthy-01.svg"
 
function Section7() {
  return (
    <div className='bg-gray-600'>
        <section class="py-8 md:py-10  md:mx-20">
  <div class="container px-4 mx-auto">
    <div>
      <div class="max-w-2xl mx-auto mb-12 text-center">
        <h1 class="font-heading tracking-tight text-2xl sm:text-3xl font-bold text-white mb-4">“WE believe in the power of home cooking to bring people together”</h1>
        {/* <p class="text-gray-200">Organizing files can be a daunting task, especially if you have a lot of them.</p>
        <p class="text-gray-200">However, with the right tools and strategies, it can be an easy and stress-free process.</p> */}
      </div>
      <div class="flex flex-wrap -mx-4 -mb-16">
      <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-16">
          <div class="max-w-xs lg:px-4 mx-auto text-center">
            <div class="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-white bg-opacity-10">
             <img className='w-8' src={Maintainace} alt='svg'></img>
            </div>
            <div class="mt-3">
              <h5 class="text-lg font-bold text-white mb-1">Maintenance free </h5>
              <p class="text-base text-gray-200">Handling the cookware is easy as well as cleaning is quick and simple.</p>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-16">
          <div class="max-w-xs lg:px-4 mx-auto text-center">
            <div class="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-white bg-opacity-10">
            <img className='w-8' src={High} alt='svg'></img>
            
            </div>
            <div class="mt-3">
              <h5 class="text-lg font-bold text-white mb-1">Highly Durable </h5>
              <p class="text-base text-gray-200">our cookware will last more than 30 years of use.</p>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-16">
          <div class="max-w-xs lg:px-4 mx-auto text-center">
            <div class="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-white bg-opacity-10">
            <img className='w-8' src={Save} alt='svg'></img>
            
            </div>
            <div class="mt-3">
              <h5 class="text-lg font-bold text-white mb-1">Saves energy </h5>
              <p class="text-base text-gray-200">using our cookware will save upto 30% on your energy consumption.</p>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-16">
          <div class="max-w-xs lg:px-4 mx-auto text-center">
            <div class="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-white bg-opacity-10">
            <img className='w-8' src={Innovative} alt='svg'></img>
            
             
            </div>
            <div class="mt-3">
              <h5 class="text-lg font-bold text-white mb-1">Innovative Design </h5>
              <p class="text-base text-gray-200">First ever stainless steel cookware to introduce in India with 7 layer base having non- stick properties and a temperature sensor.</p>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-16">
          <div class="max-w-xs lg:px-4 mx-auto text-center">
            <div class="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-white bg-opacity-10">
            <img className='w-8' src={Multi} alt='svg'></img>
             
            </div>
            <div class="mt-3">
              <h5 class="text-lg font-bold text-white mb-1">Multi-functional </h5>
              <p class="text-base text-gray-200">By combining multiple pieces of cookware, you can cook all kinds of dishes.</p>
            </div>
          </div>
        </div>
       
        <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-16">
          <div class="max-w-xs lg:px-4 mx-auto text-center">
            <div class="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-white bg-opacity-10">
            <img className='w-8' src={Health} alt='svg'></img>
            
            </div>
            <div class="mt-3">
              <h5 class="text-lg font-bold text-white mb-1">Healthy for you </h5>
              <p class="text-base text-gray-200">our non- toxic, coating free surface is better for your health as it preserves nutrients and micro nutrients in your food</p>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Section7