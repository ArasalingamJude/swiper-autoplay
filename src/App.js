// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import React, { Component } from "react";
// //import Slider from "react-slick";
import TextInfoSlider from "./sample";

// export default class AutoPlay extends Component {
//   render() {
//     // const settings = {
//     //   dots: true,
//     //   infinite: true,
//     //   slidesToShow: 3,
//     //   slidesToScroll: 1,
//     //   autoplay: true,
//     //   speed: 2000,
//     //   autoplaySpeed: 2000,
//     //   cssEase: "linear",
//     // };
//     return (
//       <div>
//         <TextInfoSlider />
//         {/* <Slider {...settings}>
//           <div>
//             <img
//               src="https://media.istockphoto.com/photos/lense-picture-id1264340404?b=1&k=20&m=1264340404&s=170667a&w=0&h=258am1gZlIsj_gZAKJuv1SCCZN7b3ACpLOovlqvtOsw="
//               alt="content"
//             />
//           </div>
//           <div>
//             <img
//               src="https://media.istockphoto.com/photos/cost-price-and-value-step-picture-id1307922234?b=1&k=20&m=1307922234&s=170667a&w=0&h=v_2zj-7uuGWhfo-DCXb0VLdRVoHbKa5Ih21A9Tzf4OA="
//               alt="content"
//             />
//           </div>
//           <div>
//             <img
//               src="https://media.istockphoto.com/photos/young-businessman-using-a-smartphone-against-an-urban-background-man-picture-id1395639015?b=1&k=20&m=1395639015&s=170667a&w=0&h=k7n9SnjKTAAINkC-VNAKpMepaYNfCB3HtbqY-CIGUFE="
//               alt="content"
//             />
//           </div>
//           <div>
//             <img
//               src="https://media.istockphoto.com/photos/glasses-concepts-picture-id802775016?b=1&k=20&m=802775016&s=170667a&w=0&h=l-tSOeUKdOnL4B5k1VlWFevKZAEgcpqp0CSLOWQt7kw="
//               alt="content"
//             />
//           </div>
//           <div>
//             <img
//               src="https://media.istockphoto.com/photos/choic-high-or-low-quality-on-opposite-arrows-on-blackboard-picture-id640282964?b=1&k=20&m=640282964&s=170667a&w=0&h=3RTtcsKLMOsUawAl9Ao7oNJDfxj4V88R_bV3SMycjE4="
//               alt="content"
//             />
//           </div>
//           <div>
//             <img
//               src="https://media.istockphoto.com/photos/tired-and-exhausted-woman-looks-at-documents-touch-head-with-hands-picture-id1357674514?b=1&k=20&m=1357674514&s=170667a&w=0&h=PtnQdhm_VWvSYDncwcska9MUQqdRi4POeazrAOFHMts="
//               alt="content"
//             />
//           </div>
//         </Slider> */}
//       </div>
//     );
//   }
// }

//import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { data } from "./mock";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function App() {
  return (
    <>
      <div className="w-[350px] h-[350px]  inline-block p-2  cursor-pointer hover:scale-105 ease-in-out duration-300">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide>
              <img src={item.img} alt="content" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <TextInfoSlider />
    </>
  );
}
