import React from "react";
import ImageSlider, { Slide } from "react-auto-image-slider";
import { data } from "./mock";

export default function TextInfoSlider(props) {
  return (
    <div>
      <ImageSlider effectDelay={500} autoPlayDelay={1000}>
        {data.map((item) => {
          return (
            <Slide>
              <img className="" alt="img2" src={item.img} />
            </Slide>
          );
        })}
      </ImageSlider>
    </div>
  );
}
// style={{ height: "50%", width: "50%" }}
