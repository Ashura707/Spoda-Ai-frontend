// components/Header.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import spoda from './assets/spoda.jpg';

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 md:hidden bg-white shadow-md">
      <i className="fas fa-bars text-2xl text-gray-800"></i>
      <h1 className="text-xl font-semibold text-gray-800">spoda.ai</h1>
      <div className="flex items-center">
        <img src={spoda} alt="Spoda" width={150} height={100} />
      </div>
    </div>
  );
};

export default Header;
