import React from 'react'
import P5 from "../../assets/About.jpg"
import P6 from "../../assets/B-2.jpeg"
import { Parallax } from "react-parallax";
import Section4 from '../HomePage/Section4';

function Section2() {
  return (
    <div>
         <section class=" pt-10 lg:py-1 overflow-hidden">
        <div class="container px-10 md:px-20 mx-auto max-w-screen-xl min-h-[56vh]">
          <div class="flex flex-wrap md:gap-48  lg:items-center -m-8 md:mb-2">
            <div class="w-full md:w-1/3 md:p-8 ">
              <div class="md:max-w-xl mx-6 md:mx-0">
                <h2 class="pt-6 mb-6 text-2xl md:text-4xl text-[#314387] font-bold font-heading mr-5  tracking-normal ">
                  Our Alpxel
                </h2>
                <div class=" md:w-[650px] ">
                <p class=" tracking-normal text-base text-gray-700 text-start font-semibold italic">
                “We have 25 plus years of experience and knowledge in manufacturing of commercial kitchen experience. We have supplied to more than 1000 hotels all over INDIA. This ALPXEL is next step in our journey to provide the best quality cookware of high standards to every house hold”
                  </p>
                  <p class=" tracking-normal text-base text-gray-700 text-start font-semibold italic">
                  "ALPXEL Cookware is marketed and Serviced by Aariya Enterprises in India. It was established in the year 2019"
                  </p>
                  <p class=" tracking-normal text-base text-gray-700 text-start">
                  The cookware from ALPXEL uses only the very best stainless steel, which is polished to a mirror finish and is manufactured in accordance with the highest quality standards. ALPXEL offers a wide range of cookware in different sizes and designs for a wide range of requirements. All pots are made of high quality materials and with the most modern manufacturing methods for the highest functionality and durability. The stainless steel cookware ALPXEL, has an understanding of the changing dynamics of today’s world, is made to achieve excellent results on all cooking surfaces.
                  </p>
                  <p class=" tracking-normal text-base text-gray-700 text-start">
                  For your kitchen, ALPXEL delivers with the best quality cookware and pricing on the market today. This has been the basis of our success in the present and our commitment to the future, and it is guaranteed to help you find your way and help you prepare the finest meals imaginable.
                  </p>
               
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 p-8">
              <div class=" hidden md:block max-w-max mx-auto">
                <img
                  class=" rounded-xl h-96 ml-20 mt-20 w-[500px] transform hover:-translate-y-2 transition duration-500"
                  src={P5}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
         <Parallax
        blur={1}
        bgImage={P6}
        bgImageAlt="the cat"
        strength={400}
        className='mb-20 h-full md:h-[500px] w-full object-cover'
        // style={{ height: "500px", width: "100%" }}
      >
       <Section4/>
      </Parallax>
    </div>
  )
}

export default Section2