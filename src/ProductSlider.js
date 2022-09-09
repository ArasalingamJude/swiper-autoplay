import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode } from "swiper";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
// import { data } from "./mock";
import "swiper/css";
import "swiper/css/free-mode";
// import Card from "./component/Card";

// import "bootstrap/dist/css/bootsrap.min.css";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const ProductSlider = () => {
  return (
    <div className=" bg-slate-100">
      <Swiper
        // freeMode={true}
        // grabCursor={true}
        // modules={[FreeMode]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
        // {...data.map((item) => (
        //   <SwiperSlide>
        //     <img src={item.img} alt="content" />
        //   </SwiperSlide>
        // ))}
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
