import React from "react";
import Slider from "./components/Slider";
import shifman from "./images/shifman.jpg";
import ninja from "./images/ninja.png";
import ed from "./images/ed.jpg";
import brad from "./images/brad.jpg";

const ImgSlider = () => {
  const img = [shifman, ninja, ed, brad];
  return (
    <>
      <div className="imgwraper">
        <Slider img={img} />
        {img.map((i) => (
          <img src={i} alt="all"></img>
        ))}
      </div>
    </>
  );
};

export default ImgSlider;
