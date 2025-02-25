import React from 'react'
import Background from '../../assets/background.svg'
import { Link } from 'react-router-dom'

function Section4() {
  return (
    <div>
      <section class="mb:py-24 md:mx-10 lg:py-10  overflow-hidden">
  <div class="container px-4 mx-auto">
    <div class="relative p-12  overflow-hidden rounded-2xl">
      <img class="absolute top-0 right-0" src="basko-assets/images/cta/gradient.png" alt=""/>
      <div class="relative">
        <h2 class="font-heading mb-2 text-2xl mb:text-4xl text-white tracking-tighter">We believe in the power of home</h2>
        <h2 class="font-heading mb-8 text-3xl md:text-6xl text-amber-300 tracking-tighter">cooking to bring people together.</h2>
        <Link class="inline-block mb-10 md:mb-32 lg:mb-20 px-5 py-4 text-white font-semibold tracking-tight bg-[#F15925] rounded-full focus:ring-4 focus:ring-indigo-300 transition duration-200" to="/allproducts">Shop Now</Link>
        <ul class="flex flex-wrap -m-4">
        
          <li class="p-4">
            <a class="flex flex-wrap">
              <svg class="mr-3" width="26" height="26" viewbox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.25 13L11.75 15.5L16.75 10.5M24.25 13C24.25 19.2132 19.2132 24.25 13 24.25C6.7868 24.25 1.75 19.2132 1.75 13C1.75 6.7868 6.7868 1.75 13 1.75C19.2132 1.75 24.25 6.7868 24.25 13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span class="text-white tracking-tight">Innovative Design</span>
            </a>
          </li>
          <li class="p-4">
            <a class="flex flex-wrap">
              <svg class="mr-3" width="26" height="26" viewbox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.25 13L11.75 15.5L16.75 10.5M24.25 13C24.25 19.2132 19.2132 24.25 13 24.25C6.7868 24.25 1.75 19.2132 1.75 13C1.75 6.7868 6.7868 1.75 13 1.75C19.2132 1.75 24.25 6.7868 24.25 13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span class="text-white tracking-tight">Better for You</span>
            </a>
          </li>
          <li class="p-4">
            <a class="flex flex-wrap">
              <svg class="mr-3" width="26" height="26" viewbox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.25 13L11.75 15.5L16.75 10.5M24.25 13C24.25 19.2132 19.2132 24.25 13 24.25C6.7868 24.25 1.75 19.2132 1.75 13C1.75 6.7868 6.7868 1.75 13 1.75C19.2132 1.75 24.25 6.7868 24.25 13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span class="text-white tracking-tight">100% Quilty </span>
            </a>
          </li>
          <li class="p-4 ">
            <a class="md:flex md:flex-wrap flex ">
              <svg class="mr-3" width="26" height="26" viewbox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.25 13L11.75 15.5L16.75 10.5M24.25 13C24.25 19.2132 19.2132 24.25 13 24.25C6.7868 24.25 1.75 19.2132 1.75 13C1.75 6.7868 6.7868 1.75 13 1.75C19.2132 1.75 24.25 6.7868 24.25 13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span class="text-white tracking-tight">Multifunctional</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Section4