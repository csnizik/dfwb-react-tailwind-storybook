import React from 'react';
import classNames from 'classnames';
import Icon from '../../../01-atoms/images/Icon';

import './Metric.css';

const Metric = ({ value, trend, size, ...props }) => {
  return (
    <div className={classNames('flex', 'flex-col')}>
      <div
        className={classNames(
          'flex',
          'flex-row',
          'justify-center',
          'items-center',
          'px-2',
          'py-0.5',
          'mx-2',
          'text-xl',
          'lg:text-5xl',
          'font-bold',
          trend === 'up'
            ? 'text-green'
            : trend === 'down'
            ? 'text-red'
            : 'text-gray'
        )}>
        <div className={classNames('mr-6', 'w-5', 'hidden','lg:block')}>
          {(trend === 'up' || trend === 'down') && (
            <Icon
              size='Medium'
              type={trend === 'up' ? 'ArrowUp' : 'ArrowDown'}
            />
          )}
        </div>
        <div className={classNames('block', 'lg:hidden', 'mr-2')}>
          {(trend === 'up' || trend === 'down') && (
            <Icon
              size='Small'
              type={trend === 'up' ? 'ArrowUp' : 'ArrowDown'}
            />
          )}
        </div>
        <div className={classNames(`font-serif`)}>{value}</div>
      </div>

    </div>
  );
};

export default Metric;
