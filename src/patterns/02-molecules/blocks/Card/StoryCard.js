import React from 'react';
import classNames from 'classnames';
import StoryCardContainer from './StoryCardContainer';

const StoryCard = (width, title, link, ...props) => {
  return (
    <div
      class={classNames(
        'w-full',
        `md:w-${width}`,
        'rounded-lg',
        'bg-white',
        'flex',
        'flex-row',
          'space-between',
          'items-center'
      )}
    >
      <img
        className={classNames('rounded-l-lg')}
        src="http://placehold.it/300x140"
          />
          <h3 className={classNames('hed3','px-6')}>Mom Panel Product Test Image is Great</h3>
    </div>
  );
};

export default StoryCard;
