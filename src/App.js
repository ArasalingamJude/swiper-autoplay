import React from "react";
import ProductSlider from "./ProductSlider";
import Navbar from "./component/Navbar";

export default function App() {
  return (
    <>
      <section>{/* <Navbar /> */}</section>
      <div className="pt-12">
        <ProductSlider />
      </div>
    </>
  );
}
