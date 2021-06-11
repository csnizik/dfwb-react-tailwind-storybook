import React from 'react';
import classNames from 'classnames';
import Icon from '../../../01-atoms/images/Icon';

import './Card.css';

const Card = ({
  width,
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
        'flex',
        `flex-col`
      )}
    >
      <div className={classNames(`flex`, `w-full`, `justify-between`,'items-center')}>
        <div
          className={classNames(
            `pt-4`,
            `pl-4`,
            'flex',
            'flex-row',
            'space-x-3',
            'justify-center',
            'items-center'
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
          'items-center',
          'flex',
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
