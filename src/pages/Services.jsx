import React from "react";
import Card from "../components/Card";
import exterior from "../images/exterior.jpg";
import interior from "../images/interior.jpg"
import full from "../images/full.jpg"
import engine from '../images/engine.jpg'
import { Link} from 'react-scroll'


const Services = () => {
  return (
    <div className="services">
      <p className="helper-text text-secondary text-center fz-md">Providing Quality Service since 2019.</p>
      <div className="container">
        <div className="section">
          <h1 className="heading text-white text-center fz-xl">SERVICES</h1>
          <div className="row gap-6 justify-center">
            <Card title={"Exterior Only"} price={50} img={exterior}>
              <img className="o-60" src={exterior} alt="" />
              <p className="fw-1">A wash and wax service and polishing of all the paint on the vehicle. </p>
              <div className="card-button text-center m-t1">
              <Link  to='contact' spy={true} smooth={true} offset={50}> 
                <button className="btn-outlined-red">Contact Now!</button>
              </Link>

              </div>
            </Card>
            <Card title={"Interior Only"} price={50} img={exterior}>
              <img className="o-60" src={interior} alt="" />
              <p>A wash and wax service and polishing of all the paint on the vehicle. </p>
              <div className="card-button text-center m-t1">
              <Link  to='contact' spy={true} smooth={true} offset={50}> 
                <button className="btn-outlined-red">Contact Now!</button>
              </Link>
              </div>
            </Card>
            <Card title={"Full Wash"} price={85} img={full}>
              <img className="o-60" src={full} alt="" />
              <p>A wash and wax service and polishing of all the paint on the vehicle. </p>
              <div className="card-button text-center m-t1">
              <Link  to='contact' spy={true} smooth={true} offset={50}> 
                <button className="btn-outlined-red">Contact Now!</button>
              </Link>
              </div>
            </Card>
            
            <Card title={"Engine Detail"} price={85} img={exterior}>
              <img className="o-60" src={engine} alt="" />
              <p>A wash and wax service and polishing of all the paint on the vehicle. </p>
              <div className="card-button text-center m-t1">
              <Link  to='contact' spy={true} smooth={true} offset={50}> 
                <button className="btn-outlined-red">Contact Now!</button>
              </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
