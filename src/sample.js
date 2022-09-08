import React from "react";
import ImageSlider, { Slide } from "react-auto-image-slider";
import { data } from "./mock";

export default function TextInfoSlider(props) {
  return (
    <div>
      <ImageSlider effectDelay={500} autoPlayDelay={2000}>
        {data.map((item) => {
          return (
            <Slide style={{ height: "50%", width: "50%" }}>
              <img
                className=""
                style={{ height: "50%", width: "50%" }}
                alt="img2"
                src={item.img}
              />
            </Slide>
          );
        })}
      </ImageSlider>
    </div>
  );
}