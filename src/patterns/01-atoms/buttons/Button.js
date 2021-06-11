import classNames from 'classnames';
import React from 'react';

import './Button.css';

const Button = ({ ...props }) => {
  return (
    <button
      className={classNames(
          'bg-white',
          'items-center',
        'flex',
        'justify-evenly',
        'rounded-full',
        'border',
        'border-gray-300',
        'min-w-max',
        'h-6',
        'p-2'
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
