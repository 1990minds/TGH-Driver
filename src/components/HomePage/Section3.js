import React from "react";
import P4 from '../../assets/p-4.jpeg'
import P5 from '../../assets/p-5.jpeg'
import P6 from '../../assets/p-6.jpeg'


function Section3() {
  return (
    <div>
           <section class="py-10 md:mx-16 bg-white overflow-hidden">
  <div class="container px-4 mx-auto">
    {/* <div class="max-w-2xl text-center mx-auto mb-16">
      <h2 class="font-heading mb-5 text-6xl tracking-tighter">Read from our blogs</h2>
      <p class="text-xl tracking-tight">Use and re-use tons of responsive sections to create the perfect layout. Sections are organised into convenient categories.</p>
    </div> */}
    <div class="flex flex-wrap -m-9">
      <div class="w-full md:w-1/2 lg:w-1/3 p-9">
        <div class="group cursor-pointer">
          <div class="mb-6 overflow-hidden rounded-lg">
            <img class="w-full rounded-lg transform hover:scale-105 transition duration-500" src={P4} alt=""/>
          </div>
          <p class="mb-3 text-indigo-500 text-2xl font-semibold tracking-tight">Fry pan</p>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 p-9">
        <div class="group cursor-pointer">
          <div class="mb-6 overflow-hidden rounded-lg">
            <img class="w-full rounded-lg transform hover:scale-105 transition duration-500" src={P5} alt=""/>
          </div>
          <p class="mb-3 text-indigo-500 text-2xl font-semibold tracking-tight">Casserole</p>
       
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 p-9">
        <div class="group cursor-pointer">
          <div class="mb-6 overflow-hidden rounded-lg">
            <img class="w-full rounded-lg transform hover:scale-105 transition duration-500" src={P6} alt=""/>
          </div>
          <p class="mb-3 text-indigo-500 text-2xl font-semibold tracking-tight">Short Casserole</p>
          
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default Section3;
