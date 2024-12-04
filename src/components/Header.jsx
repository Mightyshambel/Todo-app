import React from 'react';
import Image from'../assets/john.jpg'
import '../styles/Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header-image">
        <img src={Image} alt="John" className="avatar" />
        <div>
          <div>Hello, John</div>
          <div className="plans-text">What are your plans for today?</div>
        </div>
      </div>
      {/* <button className="upgrade-btn">Go Pro Upgrade Now $1</button> */}
    </div>
  );
};

export default Header;

