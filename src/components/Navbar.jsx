import React from "react";
import Facebook from '../icons/facebook.svg'
import Instagram from '../icons/instagram.svg'
import { Link} from 'react-scroll'


const Navbar = () => {

  
  return (
    <nav className="navbar-primary-o5 text-white">
      <h1 className="site-title">ELI'S DETAILING</h1>
      <div className="container">
        <div className="navbar-items">
          <Link  to='hero' spy={true} smooth={true} offset={0} > 
          <p>Home</p>
          </Link>
          <Link  to='services' spy={true} smooth={true} offset={50} > 
          <p>Services</p>
          </Link>
          <Link  to='gallery' spy={true} smooth={true} offset={50} > 
          <p>Gallery</p>
          </Link>
          <Link  to='test' spy={true} smooth={true} offset={50} > 
          <p>Testimonials</p>
          </Link>
          <Link  to='contact' spy={true} smooth={true} offset={50} > 
          <p>Contact</p>
          </Link>
         
        </div>
      </div>
      <img className="m-r1" src={Facebook} height={30} alt="" />
      <img src={Instagram} height={30} alt="" />
    </nav>
  );
};

export default Navbar;
