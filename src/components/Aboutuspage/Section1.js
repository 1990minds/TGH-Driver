import React from "react";
import P3 from "../../assets/about-us-2.png";

function Section1() {
  return (
    <div>
      <section class="">
        <div class=" mx-auto">
          <div class="   overflow-hidden">
            <img
              class="hidden md:block  top-0 left-0 h-full  md:w-full object-cover"
              src={P3}
              alt=""
            />

            <div className="h-full w-full ">
              {" "}
              <img
                class="block md:hidden  top-0 left-0 h-36  md:w-full object-cover"
                src={P3}
                alt=""
              />
            </div>
         
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section1;
