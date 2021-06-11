import React from 'react';
import classNames from 'classnames';

import './Card.css';

const GridCard = ({ ctaText, ...props }) => {
  return (
    <>
      <div
        class={classNames(
          `w-full`,
          ctaText ? `rounded-t-lg` : `rounded-lg`,
          `shadow`,
          `bg-white`,
          `md:space-x-3`,
          `flex`,
          `flex-col`,
          `mx-auto`,
          'mt-5',
          ctaText ? 'mb-0' : 'mb-5'
        )}
      >
        <div className={classNames('p-4')}>{props.children}</div>
      </div>

      {ctaText && (
        <div
          className={classNames(
            'w-full',
            'rounded-b-lg',
            'shadow',
            'bg-teal-dark',
            'md:space-x-3',
            'flex',
            'mx-auto',
            'p-4',
            'mb-5',
            'justify-center'
          )}
        >
          <button>
            <h3 className={classNames('hed3')}>{ctaText}</h3>
          </button>
        </div>
      )}
    </>
  );
};

export default GridCard;
