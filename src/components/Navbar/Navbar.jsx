import React from "react";
import { useState } from "react";
import "./Navbar.scss";
import images from "../../assets/images";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  const handleOnClick = (e) => {
    e.stopPropagation();
    setToggle((prevState) => !prevState);
  };

  window.addEventListener('scroll',()=>{

    const  side_bar = document.getElementById('side_bar')
    const  navbar_links = document.getElementById('navbar_links')
    if(window.scrollY>580)
    {
      navbar_links.style.display = 'none';
      side_bar.style.display = 'flex';
    }
    else{
      
      navbar_links.style.display = 'flex';
      side_bar.style.display = '';

    }


  })

  return (
    <nav className="app__navbar bg_color">
      <div className="app__navbar-logo">
        <img src={images.footer_logo} alt="logo" />
      </div>
      <ul id="navbar_links" className="app__navbar-links">
        {
        ['home', 'About Us', 'Our Experts', 'gallery', 'contact'].map
        (
          (item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={(item ==='Our Experts')?`#our_expert`:`#${item}`}>{item}       
            </a>
          </li>
          )
        )
        }
      </ul>

      <div id="side_bar" className="app__navbar-menu">
        <HiMenuAlt4 onClick={(e) => handleOnClick(e)} />

        {toggle && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 300 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 70 }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={(e) => handleOnClick(e)} />
            </motion.span>
            <ul>
              { ['home', 'About Us', 'Our Experts', 'gallery', 'contact'].map((item) => (
                <li key={item}>
                  <a href={(item ==='Our Experts')?`#our_expert`:`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
