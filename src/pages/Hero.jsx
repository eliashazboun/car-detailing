import React from "react";
import { Link } from "react-scroll";

// import "./pages.css";

const Hero = () => {
  return (
    <div className="hero h-90vh">
      <div className="content | row h-60vh pad-t4 justify-center align-center">
        <div className="flex-d-col col-12-lg col-12-md col-12-sm flex-center">
          <p className="text-yellow fz-lg text-center">FROM DUSTY TO DAZZLING</p>
          <span className="hero-title fz-xxl text-white pad-b0 text-center">ELIS DETAILING</span>
          <div className="container-sm pad-b2">
            <p className="about fz-md text-white text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi maxime sed cum. Modi at mollitia quo similique! Quae, est in?</p>
          </div>
          <div className="display-f gap-14">
            <Link className="display-f" to="contact" spy={true} smooth={true} offset={0}>
              <button className="btn-accent o-80 w-100">Contact Now</button>
            </Link>
            <Link to="services" spy={true} smooth={true} offset={50}>
              <button className="btn-accent o-80">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
