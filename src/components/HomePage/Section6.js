import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllTestimonial,
  testimonialSelector,
} from "../../api/testimonial";
import { Interweave } from "interweave";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";

export default function Section5() {
  const { testimonial } = useSelector(testimonialSelector);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(fetchAllTestimonial());
  }, []);

  return (
    <div>
      <section class="hidden md:block relative py-10 lg:py-16 overflow-hidden  ">
        <div class="relative container px-4 mx-auto">
          <div class="max-w-lg lg:max-w-7xl mx-auto">
            <div class="flex flex-wrap -mx-4 mb-18 items-center">
              <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                <div class="max-w-md xl:max-w-2xl">
                  <h1 class="font-heading text-2xl md:text-4xl font-bold text-[#314387]">
                    <span>Our</span>
                    <span> Happy</span>
                    <span>
                      {" "}
                      Customers <br /> says about us
                    </span>
                  </h1>
                </div>
              </div>
            </div>

            <Swiper
              slidesPerView={1}
              spaceBetween={1}
              navigation={true}
              loop={true}
              // autoplay={{
              //   delay: 3500,
              //   disableOnInteraction: false,
              // }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                1000: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
              }}
            >
              {testimonial.map((item, i) => (
                <SwiperSlide className="" key={i}>
                  <div class="flex-wrap -mx-4 items-center ">
                    <div class="w-full lg:w-full px-4 mb-8 sm:mt-8 lg:mb-0 flex justify-between">
                      <div class="lg:max-w-md xl:max-w-lg">
                        <img
                          class="block w-full rounded-lg"
                          src={item?.image}
                          alt=""
                        />
                      </div>

                      <div class="w-full lg:w-full px-4">
                        <div class="max-w-3xl">
                          <p class="text-base text-gray-700 ">
                            <Interweave content={item?.description} />
                          </p>
                          <span class="block text-lg font-semibold mt-2">
                            {item?.author}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------mobile---------------------------------------------- */}

      <section class="block md:hidden relative pt-5 lg:py-16 overflow-hidden ">
        <div class="relative container px-4 mx-auto">
          <div class="max-w-lg lg:max-w-7xl mx-auto">
            <div class="flex flex-wrap -mx-4 mb-18 items-center">
              <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                <div class="max-w-md xl:max-w-2xl text-center">
                  <h1 class="font-heading text-2xl md:text-4xl font-bold text-[#314387] ">
                    <span>Our</span>
                    <span> Happy</span>
                    <span>
                      {" "}
                      Clients <br /> says about us
                    </span>
                  </h1>
                </div>
              </div>
            </div>

            <Swiper
              slidesPerView={1}
              spaceBetween={1}
              navigation={true}
              loop={true}

              // autoplay={{
              //   delay: 3500,
              //   disableOnInteraction: false,
              // }}

              modules={[Pagination, Autoplay, Navigation]}
              className="mySwiper"
            >
              {testimonial.map((item, i) => (
                <SwiperSlide className="" key={i}>
                  <div class="p-2 ">
                    <div class="flex w-32 h-32 ml-24  items-center justify-center ">
                      <img
                        class=" flex w-32 h-32 items-center justify-center rounded-full"
                        src={item?.image}
                        alt=""
                      />
                    </div>
                    <div class=" mt-1 w-full px-4">
                      <div class="max-w-3xl">
                        <span class="block text-sm font-semibold mt-2">
                          {item?.author}
                        </span>
                        <p class="text-base text-gray-700 mt-2  ">
                          <Interweave content={item?.description} />
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}
