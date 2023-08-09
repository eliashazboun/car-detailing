import React from "react";
import ReactSwipe from "react-swipe";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const Gallery = () => {
  let reactSwipeEl;

  return (
    <div className="gallery text-white">
      <p className="text-secondary text-center fz-md">No Refunds.</p>
      <div className="container">
        <div className="section">
          <h1 className="text-white text-center fz-xl heading">GALLERY</h1>
          <div className="swiper display-f justify-center align-center gap-10 m">
            <button className="btn-outlined-red arrow" onClick={() => reactSwipeEl.prev()}>
              <KeyboardArrowLeftIcon />
            </button>
            <ReactSwipe className="carousel w-100 m-b4" swipeOptions={{ continuous: true }} ref={(el) => (reactSwipeEl = el)}>
              <img src={require("../images/image1.jpg")} style={{ objectFit: "contain" }} height={500} width={"100%"} alt="" />
              <img src={require("../images/image2.jpg")} style={{ objectFit: "contain" }} height={500} width={"100%"} alt="" />
              <img src={require("../images/image3.jpeg")} style={{ objectFit: "contain" }} height={500} width={"100%"} alt="" />
              <img src={require("../images/image4.jpg")} style={{ objectFit: "contain" }} height={500} width={"100%"} alt="" />
              <img src={require("../images/image5.jpg")} style={{ objectFit: "contain" }} height={500} width={"100%"} alt="" />
              <img src={require("../images/image6.jpg")} style={{ objectFit: "contain" }} height={500} width={"100%"} alt="" />
            </ReactSwipe>

            <button className="btn-outlined-green arrow" onClick={() => reactSwipeEl.next()}>
              <KeyboardArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
