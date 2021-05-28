import React from 'react';
import smangram from '../images/smangram.svg';

const Header = () => {
  return (
    <div className="title">
      <div className="flex bg-gray-100 py-4 space-x-2">
        <img className="select-none w-10 h-10 ml-4" src={smangram} alt="logo" />
        <h1 className="text-blue-400 text-3xl brandName select-none">Smangram</h1>
      </div>
    </div>
  )
}

export default Header;