import React from "react";
import Testimonial from "../components/Testimonial";

const Testimonials = () => {
  return (
    <div className="test" >
      <p className="text-secondary text-center fz-md ">Before and After Pictures.</p>
      <div className="section">
        <h1 className="text-white text-center fz-xl heading">TESTIMONIALS</h1>
        <div className="row display-f justify-center gap-14 m-b2">
          <Testimonial image={"test1.jpg"} rating={5} name={"Nicholas Cage"} />
          <Testimonial image={"test2.jpg"} rating={5} name={"Mariah Carey"} />
          <Testimonial image={"test3.jpg"} rating={5} name={"Alton Brown"} />
         
        </div>

        <p className="text-white text-center fz-md"><a className="text-hover-accent" href="https://google.com" target="_blank">Click here to see more reviews.</a></p>
      </div>
    </div>
  );
};

export default Testimonials;
