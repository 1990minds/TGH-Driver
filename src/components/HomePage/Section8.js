import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import P4 from '../../assets/p-4.jpeg'
import P5 from '../../assets/p-5.jpeg'
import P6 from '../../assets/p-6.jpeg'
function Section8() {
  return (
    <div>
        <section class="py-24 lg:pt-38 lg:pb-32 bg-white overflow-hidden">
  <div class=" px-4 mx-auto ">
    <h2 class="font-heading mb-12 text-4xl mx-20 tracking-tighter">Happening at Our Place</h2>
   
    <Swiper
            slidesPerView={1} // For mobile devices, show 1 slide per view
            spaceBetween={1} // Adjust the space between slides as needed
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            breakpoints={{
              // Define breakpoints for different screen sizes
              640: {
                slidesPerView: 2, // Show 2 slides per view when screen width is 640px or more
                spaceBetween: 20, // Adjust the space between slides as needed
              },
              768: {
                slidesPerView: 3, // Show 3 slides per view when screen width is 768px or more
                spaceBetween: 30, // Adjust the space between slides as needed
              },
              1000: {
                slidesPerView: 3, // Show 3 slides per view when screen width is 768px or more
                spaceBetween: 30, // Adjust the space between slides as needed
              },
            }}
          >
    <div class="flex flex-wrap -mx-8">
    <SwiperSlide>
  <div class="w-full px-2">
    <div class="group cursor-pointer">
      <div class="mb-6 overflow-hidden rounded-lg">
        <img class="w-[400px] h-[1000px] rounded-t-full rounded-lg transform hover:scale-105 transition duration-500" src={P4} alt=""/>
      </div>
      <p class="mb-6 text-gray-500 font-medium tracking-tight">
      </p>
      <h3 class="mb-4 text-3xl group-hover:text-gray-900 font-semibold group-hover:underline">See us in store</h3>
    </div>
  </div>
  </SwiperSlide>
  <SwiperSlide>
  <div class="w-full px-2">
    <div class="group cursor-pointer">
      <div class="mb-6 overflow-hidden rounded-lg">
        <img class="w-[400px] h-[800px] rounded-t-full rounded-lg transform hover:scale-105 transition duration-500" src={P5} alt=""/>
      </div>
      <p class="mb-6 text-gray-500 font-medium tracking-tight">
      </p>
      <h3 class="mb-4 text-3xl group-hover:text-gray-900 font-semibold group-hover:underline">our mission</h3>
    </div>
  </div>
  </SwiperSlide>
  <SwiperSlide>
  <div class="w-full px-2">
    <div class="group cursor-pointer">
      <div class="mb-6 overflow-hidden rounded-lg">
        <img class="w-[400px] h-[800px] rounded-t-full rounded-lg transform hover:scale-105 transition duration-500" src={P6} alt=""/>
      </div>
      <p class="mb-6 text-gray-500 font-medium tracking-tight">
      </p>
      <h3 class="mb-4 text-3xl group-hover:text-gray-900 font-semibold group-hover:underline">Get in touch</h3>
    </div>
  </div>
  </SwiperSlide>
  <SwiperSlide>
  <div class="w-full px-2">
    <div class="group cursor-pointer">
      <div class="mb-6 overflow-hidden rounded-lg">
        <img class="w-[400px] h-[500px] rounded-t-full rounded-lg transform hover:scale-105 transition duration-500" src={P5} alt=""/>
      </div>
      <p class="mb-6 text-gray-500 font-medium tracking-tight">
      </p>
      <h3 class="mb-4 text-3xl group-hover:text-gray-900 font-semibold group-hover:underline">Recipe for your place</h3>
    </div>
  </div>
  </SwiperSlide>
  <SwiperSlide>
  <div class="w-full px-2">
    <div class="group cursor-pointer">
      <div class="mb-6 overflow-hidden rounded-lg">
        <img class="w-[400px] h-[500px] rounded-t-full rounded-lg transform hover:scale-105 transition duration-500" src={P5} alt=""/>
      </div>
      <p class="mb-6 text-gray-500 font-medium tracking-tight">
      </p>
      <h3 class="mb-4 text-3xl group-hover:text-gray-900 font-semibold group-hover:underline">Recipe for your place</h3>
    </div>
  </div>
  </SwiperSlide>
  <SwiperSlide>
  <div class="w-full px-2">
    <div class="group cursor-pointer">
      <div class="mb-6 overflow-hidden rounded-lg">
        <img class="w-[400px] h-[500px] rounded-t-full rounded-lg transform hover:scale-105 transition duration-500" src={P5} alt=""/>
      </div>
      <p class="mb-6 text-gray-500 font-medium tracking-tight">
      </p>
      <h3 class="mb-4 text-3xl group-hover:text-gray-900 font-semibold group-hover:underline">Recipe for your place</h3>
    </div>
  </div>
  </SwiperSlide>
  </div>
</Swiper>

  </div>
</section>
    </div>
  )
}

export default Section8