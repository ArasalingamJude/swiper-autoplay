import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode } from "swiper";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
// import { data } from "./mock";
import "swiper/css";
import "swiper/css/navigation";
// import Card from "./component/Card";

// import "bootstrap/dist/css/bootsrap.min.css";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const ProductSlider = () => {
  return (
    <div className=" px-5 py-5 bg-slate-400">
      <Swiper
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" p-5">
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="www.google.com">
                <img
                  className="rounded-t-lg"
                  src="https://media.istockphoto.com/photos/young-businessman-using-a-smartphone-against-an-urban-background-man-picture-id1395639015?b=1&k=20&m=1395639015&s=170667a&w=0&h=k7n9SnjKTAAINkC-VNAKpMepaYNfCB3HtbqY-CIGUFE="
                  alt="pic"
                />
              </a>
              <div className="p-5">
                <a href="www.google.com">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" p-5">
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="www.google.com">
                <img
                  className="rounded-t-lg"
                  src="https://media.istockphoto.com/photos/choic-high-or-low-quality-on-opposite-arrows-on-blackboard-picture-id640282964?b=1&k=20&m=640282964&s=170667a&w=0&h=3RTtcsKLMOsUawAl9Ao7oNJDfxj4V88R_bV3SMycjE4="
                  alt="pic"
                />
              </a>
              <div className="p-5">
                <a href="www.google.com">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" p-5">
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="www.google.com">
                <img
                  className="rounded-t-lg"
                  src="https://media.istockphoto.com/photos/young-businessman-using-a-smartphone-against-an-urban-background-man-picture-id1395639015?b=1&k=20&m=1395639015&s=170667a&w=0&h=k7n9SnjKTAAINkC-VNAKpMepaYNfCB3HtbqY-CIGUFE="
                  alt="pic"
                />
              </a>
              <div className="p-5">
                <a href="www.google.com">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" p-5">
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="www.google.com">
                <img
                  className="rounded-t-lg"
                  src="https://media.istockphoto.com/photos/cost-price-and-value-step-picture-id1307922234?b=1&k=20&m=1307922234&s=170667a&w=0&h=v_2zj-7uuGWhfo-DCXb0VLdRVoHbKa5Ih21A9Tzf4OA="
                  alt="pic"
                />
              </a>
              <div className="p-5">
                <a href="www.google.com">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" p-5">
            <div className="max-w-sm lg:w-100 lg:h-100 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="www.google.com">
                <img
                  className="rounded-t-lg"
                  src="https://media.istockphoto.com/photos/choic-high-or-low-quality-on-opposite-arrows-on-blackboard-picture-id640282964?b=1&k=20&m=640282964&s=170667a&w=0&h=3RTtcsKLMOsUawAl9Ao7oNJDfxj4V88R_bV3SMycjE4="
                  alt="pic"
                />
              </a>
              <div className="p-5">
                <a href="www.google.com">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" p-5">
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="www.google.com">
                <img
                  className="rounded-t-lg"
                  src="https://media.istockphoto.com/photos/young-businessman-using-a-smartphone-against-an-urban-background-man-picture-id1395639015?b=1&k=20&m=1395639015&s=170667a&w=0&h=k7n9SnjKTAAINkC-VNAKpMepaYNfCB3HtbqY-CIGUFE="
                  alt="pic"
                />
              </a>
              <div className="p-5">
                <a href="www.google.com">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <Card /> */}
          <div className=" p-5">
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="www.google.com">
                <img
                  className="rounded-t-lg"
                  src="https://media.istockphoto.com/photos/young-businessman-using-a-smartphone-against-an-urban-background-man-picture-id1395639015?b=1&k=20&m=1395639015&s=170667a&w=0&h=k7n9SnjKTAAINkC-VNAKpMepaYNfCB3HtbqY-CIGUFE="
                  alt="pic"
                />
              </a>
              <div className="p-5">
                <a href="www.google.com">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <Card /> */}
          <div className=" p-5">
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="www.google.com">
                <img
                  className="rounded-t-lg"
                  src="https://media.istockphoto.com/photos/young-businessman-using-a-smartphone-against-an-urban-background-man-picture-id1395639015?b=1&k=20&m=1395639015&s=170667a&w=0&h=k7n9SnjKTAAINkC-VNAKpMepaYNfCB3HtbqY-CIGUFE="
                  alt="pic"
                />
              </a>
              <div className="p-5">
                <a href="www.google.com">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
