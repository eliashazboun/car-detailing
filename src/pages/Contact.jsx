import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="section">
        <div className="container">
          <h1 className="text-white text-center fz-xl heading">CONTACT</h1>
          <div className="row justify-space-around">
            <div className="contactitem text-center pad-1 col-12-sm col-12-md col-4-lg">
              <img src={require("../images/location.png")} height={50} alt="" />
              <p className="text-white fz-lg text-center ">ADDRESS</p>
              <p className="text-white fz-md text-center ">123 Fairy Lane <br/>Rocky Mount, NC</p>
            </div>
            <div className="contactitem text-center pad-1 col-12-sm col-12-md col-4-lg">
              <img src={require("../images/phone.png")} height={50} alt="" />
              <p className="text-white fz-lg text-center ">PHONE</p>
              <p className="text-white fz-md text-center ">(252)-469-8517</p>

            </div>
            <div className="contactitem text-center pad-1 col-12-sm col-12-md col-4-lg">
              <img src={require("../images/email.png")} height={50} alt="" />
              <p className="text-white fz-lg text-center ">EMAIL</p>
              <p className="text-white fz-md text-center ">hazbounelias96@gmail.com</p>

            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
