import React, { useEffect, useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, productSelector } from "../../api/products";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../App.css";
import { Link } from "react-router-dom";

function Section2() {
  const dispatch = useDispatch();
  const { allproducts } = useSelector(productSelector);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  return (
    <div className="bg-gray-100">
      <div className="md:my-10 md:mx-36 ">
        <section className="relative bg-gray-100   py-10 lg:pt-10  overflow-x-hidden">
          <div className="relative container bg-gray-100 mx-auto px-4">
            <h2 className="mb-6 text-2xl md:text-4xl text-[#314387] font-bold font-heading">
              Our Products
            </h2>
            <Swiper
              slidesPerView={1} // For mobile devices, show 1 slide per view
              spaceBetween={10} // Adjust the space between slides as needed
              autoplay={{
                delay: 3500,
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
              <div className="md:flex md:flex-wrap -mx-3 bg-gray-100">
                {allproducts.map((item) => {
                  return (
                    <SwiperSlide>
                      <div className="md:w-full md:mb-16 pb-6 lg:mb-0 bg-white rounded-3xl relative">
                        {/* {item?.stock_qty <= 0 && (
                          <div class="absolute inset-0 flex items-center justify-center">
                            <div class="bg-red-500 text-white px-4 py-2 rounded-full uppercase font-bold text-xs">
                              Out of stock
                            </div>
                          </div>
                        )} */}

                        <div className="block mb-4" href="">
                          <div className="">
                            <img
                              classname="w-full h-96 object-cover rounded-t-lg"
                              src={item?.featured_image}
                              alt=""
                            />
                          </div>
                          <div className="mt-6 bg-white">
                            <div className="mb-2">
                              <h3 className="mb-3 text-lg text-[#314387] font-bold font-heading">
                                {item?.product_name}
                              </h3>

                              <p className="text-lg font-bold font-heading text-gray-800 ">
                                <span className="mb-6 px-2 py-1 text-2xl font-bold font-heading text-red-500">
                                  -{item?.discount}%
                                </span>
                                <span>Rs {item?.total_price}</span>
                              </p>
                              <span className="text-sm text-gray-500 font-semibold font-heading line-through">
                                M.R.P: {item?.price}
                              </span>
                            </div>
                          </div>
                        </div>

                        {item?.stock_qty > 0 ? (
                          <Link
                            className="inline-block bg-[#F15925] hover:bg-[#F15926] text-white font-bold font-heading py-2 px-10 rounded-full transition duration-200"
                            to={`/individualpro/${item?._id}`}
                          >
                            Buy Now
                          </Link>
                        ) : (
                          <button
                            className="inline-block bg-gray-300 text-gray-700 font-bold font-heading py-2 px-10 rounded-full cursor-not-allowed"
                            disabled
                          >
                            Out of Stock
                          </button>
                        )}
                      </div>
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Section2;
