import React from 'react';
import classNames from 'classnames';
import Icon from '../../../01-atoms/images/Icon';

import './Metric.css';

const Metric = ({ value, trend, ...props }) => {
  return (
    <div className={classNames('flex','flex-col')}>
      <div
        className={classNames(
          `flex`,
          `flex-row`,
          `justify-center`,
          `items-center`,
          `px-2`,
          `py-0.5`,
          `mx-2`,
          `text-5xl`,
          `font-bold`,
          `${
            trend === 'up'
              ? 'text-green'
              : trend === 'down'
              ? 'text-red'
              : 'text-gray'
          }`
        )}
      >
        <div className={classNames(`mr-6`, `w-5`)}>
          {(trend === 'up' || trend === 'down') && (
            <Icon
              size="Medium"
              type={trend === 'up' ? 'ArrowUp' : 'ArrowDown'}
            />
          )}
        </div>
        <div className={classNames(`font-serif`)}>{value}</div>
      </div>
    
            <div className={classNames(`flex`,
          `flex-row`,
          `justify-center`,
          `items-center`,
          `px-2`,
          `py-0.5`,
              `mx-2`,
              `font-lg`,
              `font-serif`, `font-medium`)}>{props.children}</div>
    </div>
  );
};

export default Metric;
