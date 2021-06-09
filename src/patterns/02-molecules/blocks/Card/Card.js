import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../../01-atoms/images/Icon';

import './Card.css';

const Card = ({
  width = '1/3',
  iconSize,
  iconType,
  iconColor,
  heading,
  subheading,
  ...props
}) => {
  return (
    <div
      class={classNames(
        `w-full`,
        `md:w-${width}`,
        `rounded-lg`,
        `shadow`,
        `bg-white`,
        `md:space-x-3`,
        `flex-col`,
        `m-8`
      )}
    >
      <div className={classNames(`flex`, `w-full`, `justify-between`)}>
        <div
          className={classNames(
            `pt-4`,
            `pl-4`,
            'flex',
            'flex-rox',
            'space-x-3',
            'justify-center',
            'items-start'
          )}
        >
          {iconType && (
            <Icon size={iconSize} color={iconColor} type={iconType} />
          )}
          <h2 className={classNames('hed2', 'text-blue-dark')}>{heading}</h2>
        </div>
        <div className={classNames(`items-center`, `flex`)}>
          <button
            className={classNames(
              `bg-teal-dark`,
              `text-white`,
              `rounded-tr-xl`,
              `rounded-bl-xl`,
              `focus:outline-none`,
              `hover:bg-teal-light`,
              `w-12`,
              `h-12`,
              `font-sans`,
              'flex',
              'justify-center',
              'items-center'
            )}
          >
            <Icon color="Navy Sky" size="Small" type="MagnifyingGlass" />
          </button>
        </div>
      </div>
      <div className={classNames('px-10', 'pb-5')}>
        <div className={classNames('text-gray-500')}>{subheading}</div>
      </div>
      <div
        className={classNames(
          'w-full',
          'py-5',
          'px-10',
          'flex',
          'items-center',
          'justify-center',
          '-ml-3'
        )}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Card;
