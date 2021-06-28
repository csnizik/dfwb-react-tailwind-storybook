import React from 'react';
import classNames from 'classnames';

import './Card.css';

const GridCard = ({ ctaText, ...props }) => {
  return (
    <>
      <div
        class={classNames(
          ctaText ? `rounded-t-lg` : `rounded-lg`,
          `shadow`,
          'p-4',
          `bg-white`,
          `flex`,
          `flex-col`,
          ctaText ? 'mb-0' : 'mb-5'
        )}
      >
        <div>{props.children}</div>
      </div>

      {ctaText && (
        <div
          className={classNames(
            'rounded-b-lg',
            'shadow',
            'bg-teal-dark',
            'flex',
            'p-4',
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
