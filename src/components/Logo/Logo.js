import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Logo.css';

import { ReactComponent as LogoNavySky } from './DestinFWB_Logo__navy sky.svg';
import { ReactComponent as LogoSeaFoam } from './DestinFWB_Logo__sea_foam_teal.svg';
import { ReactComponent as LogoWhitewashWhite } from './DestinFWB_Logo__whitewash_white.svg';
import { ReactComponent as LogoBlack } from './DestinFWB_Logo__black.svg';

const logoClasses = (size, color) =>
  classNames({
    'w-96 h-96': !size || size === 'xl',
    'w-48 h-48': size === 'lg',
    'w-24 h-24': size === 'md',
    'w-12 h-12': size === 'sm',
  });

const renderLogo = (color) => {
  switch (color) {
    case 'Black':
      return <LogoBlack />;
    case 'Navy Sky':
      return <LogoNavySky />;
    case 'Whitewash White':
      return <LogoWhitewashWhite />;
    default:
      return <LogoSeaFoam />;
  }
};

const Logo = ({ size, color }) => {
  return <div className={logoClasses(size)}>{renderLogo(color)}</div>;
};

Logo.protoTypes = {
  size: PropTypes.string,
};
export default Logo;
