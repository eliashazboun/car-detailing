import React from "react";
import ReactStars from "react-rating-stars-component";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Testimonial = ({ name, rating,image,children }) => {
  return (
    <div className="testimonial col-12-sm col-12-md col-3-lg text-center">
      <img className="picture" src={require("../images/" + image)} alt="" />
      <div className="display-f justify-center">
        <ReactStars count={5} size={24} activeColor="#ffd700" value={rating} edit={false} />
      </div>
      {children}
      <div className="container-sm">

      <p className="review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at facere dignissimos voluptatum delectus neque ullam, saepe perspiciatis aperiam minima amet dolorem sint possimus. Temporibus harum voluptatem culpa mollitia magni.</p>
      </div>
      <FormatQuoteIcon style={{ color: "white" }} fontSize="large" />
      <p className="name">{name}</p>
    </div>
  );
};

export default Testimonial;
