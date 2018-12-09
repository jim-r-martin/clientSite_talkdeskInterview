import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

const Header = () => (
  <div className="header">
    <div className="title">
      FLEXPORT
    </div>
    <div className="country">
      <img id="thumbnail" src={'/americanFlagThumbnail.jpg'} />
      <FaAngleDown className="angleDown" />
    </div>
  </div>
);

export default Header;