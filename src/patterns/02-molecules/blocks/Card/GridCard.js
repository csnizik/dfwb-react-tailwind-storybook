import React from 'react';
import classNames from 'classnames';

import './Card.css';

const GridCard = () => {
  return (
    <div
      class={classNames(
        `w-full`,
        `rounded-lg`,
        `shadow`,
        `bg-white`,
        `md:space-x-3`,
        `p-4`,
        `flex`,
        `flex-col`,
        `lg:flex-row`,
        `mx-auto`
      )}
    >
      {/* TODO: finish doing the columns */}
      {/* <div className={classNames()}></div> */}
        Top Markets
    </div>
  );
};

export default GridCard;
