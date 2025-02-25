import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBanner, bannerSelector } from "../../api/banner";
import { fetchAllMobbanner, mobbannerSelector } from "../../api/mobilebanner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Section1() {
  const dispatch = useDispatch();
  const { banner } = useSelector(bannerSelector);
  const { mobbanner } = useSelector(mobbannerSelector);


  useEffect(() => {
    dispatch(fetchAllBanner());
  }, []);

  useEffect(() => {
    dispatch(fetchAllMobbanner());
  }, []);



  return (
    <div>
      <div className="hidden md:block">
      <Swiper
            slidesPerView={1} // For mobile devices, show 1 slide per view
            spaceBetween={1} // Adjust the space between slides as needed
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
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
          {banner.map((item, i) => {
            return (
              <SwiperSlide>
              <div>
                <img
                  className=" bottom-0 left-0 w-full  "
                  src={item?.banner_image}
                  alt=""
                />
              </div>
              </SwiperSlide>
            );
          })}
 </Swiper>
      </div>

      <div className="block md:hidden">
      <Swiper
            slidesPerView={1} // For mobile devices, show 1 slide per view
            spaceBetween={1} // Adjust the space between slides as needed
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
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
          {mobbanner.map((item, i) => {
            return (
              <SwiperSlide>
              <div>
                <img
                  className=" bottom-0 left-0 w-full h-full  "
                  src={item?.mobilebanner_image}
                />
              </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      </div>
    </div>
  );
}
