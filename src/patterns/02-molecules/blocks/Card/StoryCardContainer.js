import React from 'react';
import classNames from 'classnames';
import Icon from '../../../01-atoms/images/Icon';
import StoryCard from './StoryCard';

const StoryCardContainer = ({
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
        'w-full',
        `md:w-${width}`,
        'bg-transparent',
        'flex',
        'flex-col',
        'justify-between'
      )}
    >
      <div
        className={classNames(
          `flex`,
          `w-full`,
          `justify-between`,
          'items-center'
        )}
      >
        <div
          className={classNames(
            
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
      </div>
      <div className={classNames('px-10', 'pb-5')}>
        <div className={classNames('text-gray-500')}>{subheading}</div>
      </div>
      <div className={classNames('space-y-4')}>
        <StoryCard title="Atlanta Mom Feedback"/>

        <StoryCard title="Mom Panel Product Test Image is Great"/>
      </div>
    </div>
  );
};

export default StoryCardContainer;
