import React, { useEffect, useState } from "react";
import "../styles/slider.css";

const Slider = ({ img }) => {
  const [index, setindex] = useState(0);
  let length = img.length - 1;
  //useeffect hook
  //   useEffect(() => {
  //     setInterval(() => {
  //       index < length ? setindex(index + 1) : setindex(0);
  //     }, 2000);
  //   }, [index]);

  function incIndex() {
    index !== 0 ? setindex(index - 1) : setindex(length);
  }
  function decIndex() {
    index > img.length - 2 ? setindex(0) : setindex(index + 1);
  }

  return (
    <>
      <div className="slider">
        <button onClick={incIndex}>{"<"}</button>
        <div className="img">
          <img src={img[index]} alt="slider" />
        </div>
        <button onClick={decIndex}>{">"}</button>
      </div>
    </>
  );
};

export default Slider;
