import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Logo.css';

import { ReactComponent as DSFWLogo } from './DestinFWBLogo.svg';

const logoClasses = (size) =>
  classNames({
    'w-96 h-96 max-w-full': !size || size === 'Large',
    'w-48 h-48': size === 'Medium',
    'w-24 h-24': size === 'Small',
  });

const logoColor = (color) =>
  classNames({
    'text-teal fill-current': !color || color === 'Sea Foam Teal (Primary)',
    'text-black fill-current': color === 'Black',
    'text-blue-dark fill-current': color === 'Navy Sky',
    'text-white-dark fill-current': color === 'Whitewash White',
  });


const Logo = ({ size = 'Large', color }) => {
  return <div className={logoClasses(size)}><DSFWLogo className={logoColor(color)}/></div>;
};

Logo.propTypes = {
  size: PropTypes.string,
};
export default Logo;
