import React, {useState} from 'react';
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';
import './Navbar.scss';
import { images } from '../../constants';
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
        <img src={images.logo3} alt="logo"/>
        </div>
        <ul className='app__navbar-links'>
            {['home','about', 'skills','Contact Me'].map((item1) => (
                <li className='app_flex p-text-header' key={`link-${item1}`}>
                    <div/>
                        <a href={`#${item1}`}>{item1}</a>
                </li>
            ))}
        </ul>
        <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={()=> setToggle(true)}/>
                {
                    toggle && (
                        <motion.div
                        whileInView={{x : [300, 0]}}
                        transition={{duration: 0.85, ease: 'easeInOut'}}
                        >
                        <HiX onClick={() =>setToggle(false)}/>
                        <ul>
                        {['home','about', 'skills','Contact Me'].map((item) => (   
                        <li className='app_flex p-text' key={`link-${item}`}>
                        <a href={`#${item}`} onClick={()=> setToggle(true)}>{item}</a>
                        </li>
                        ))}
                        </ul>
                        </motion.div>
                    )}
        </div>
    </nav>
  )
}

export default Navbar;