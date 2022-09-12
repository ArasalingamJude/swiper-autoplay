import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const ProductSlider = () => {
  return (
    <div className=" bg-slate-400 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        grabCursor={true}
        pagination={{
          clickable: true,
          dynamicMainBullets: true,
        }}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1024: {
            width: 1024,
            slidesPerView: 2,
          },
        }}
        navigation={true}
        className="mySwiper"
      >
        <div>
          <SwiperSlide>
            <div class="flex justify-center p-4  hover:scale-105 ease-in-out duration-300">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    class="rounded-t-lg"
                    src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                    alt=""
                  />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl text-center font-medium mb-2">
                    Card title
                  </h5>
                  <p class="text-gray-700 text-center text-base mb-4">
                    Some quick example text to build on the card title
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="flex justify-center p-4  hover:scale-105 ease-in-out duration-300">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    class="rounded-t-lg"
                    src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                    alt=""
                  />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl text-center font-medium mb-2">
                    Card title
                  </h5>
                  <p class="text-gray-700 text-center text-base mb-4">
                    Some quick example text to build on the card title
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="flex justify-center p-4  hover:scale-105 ease-in-out duration-300">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    class="rounded-t-lg"
                    src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                    alt=""
                  />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl text-center font-medium mb-2">
                    Card title
                  </h5>
                  <p class="text-gray-700 text-center text-base mb-4">
                    Some quick example text to build on the card title
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="flex justify-center p-4  hover:scale-105 ease-in-out duration-300">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    class="rounded-t-lg"
                    src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                    alt=""
                  />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl text-center font-medium mb-2">
                    Card title
                  </h5>
                  <p class="text-gray-700 text-center text-base mb-4">
                    Some quick example text to build on the card title
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="flex justify-center p-4  hover:scale-105 ease-in-out duration-300">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    class="rounded-t-lg"
                    src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                    alt=""
                  />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl text-center font-medium mb-2">
                    Card title
                  </h5>
                  <p class="text-gray-700 text-center text-base mb-4">
                    Some quick example text to build on the card title
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
