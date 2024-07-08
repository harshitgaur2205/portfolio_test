import React from 'react';
import Slidetabs from "./components/Navbar/SlideTabs";
import BubbleText from './components/Navbar/BubbleText/BubbleText';
import SlideInNotifications from './components/Main/SlideInNotifications';

const Navbar = () => {
  return (
    <div className="navbar">
      <BubbleText />
      <Slidetabs />
      <SlideInNotifications />
    </div>
  );
}

export default Navbar;
 