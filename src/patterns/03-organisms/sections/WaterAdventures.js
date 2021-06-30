import classNames from 'classnames';
import React, { useState } from 'react';

import Chart from '../../02-molecules/blocks/Chart/Chart';
import Icon from '../../01-atoms/images/Icon/Icon';

const WaterAdventures = ({ pathName }) => {
  const [cardExpanded, setCardExpanded] = useState(false);
  return (
    <div
      className={classNames(
        'flex',
        'flex-col',
        'col-span-3',
        pathName !== '/water' ? 'lg:col-span-1' : '',
        'p-3',
        'rounded-lg',
        'shadow',
        'bg-white'
      )}>
      <div
        className={classNames(
          'flex',
          '-mt-3',
          '-mx-3',
          'rounded-t-lg',
          'min-w-full',
          'justify-between'
        )}>
        <div
          className={classNames(
            'pt-4',
            'pl-4',
            'flex',
            'self-start',
            'space-x-3',
            'justify-center',
            'items-center',
            pathName === '/' ? 'visible' : 'invisible'
          )}>
          <Icon size="small" color="Navy Sky" type="Pin" />
          <h3 className={classNames('hed-3', 'text-blue-dark')}>
            Water Adventures
          </h3>
        </div>
        <div className={classNames('self-end', 'flex', 'items-center')}>
          <button
            className={classNames(
              `bg-teal-dark`,
              `text-white`,
              `rounded-tr-lg`,
              `rounded-bl-lg`,
              `focus:outline-none`,
              `hover:bg-teal-light`,
              `w-12`,
              `h-12`,
              `font-sans`,
              'flex',
              'justify-center',
              'items-center'
            )}>
            <Icon color="Navy Sky" size="Small" type="MagnifyingGlass" />
          </button>
        </div>
      </div>
      <p
        className={classNames(
          'text-gray-500',
          'text-sm',
          pathName === '/' ? 'visible' : 'invisible'
        )}>
        Increase in water-based family adventures taken
      </p>
      <div id="waterChart" className={classNames('self-center')}>
        <Chart
          chartType="Bar"
          data={[
            ['Year', 'Total Water Adventures', { role: 'style' }],
            ['2019', 6.94, '#124168'],
            ['2020', 8.49, '#48AAED'],
            ['2021', 10.49, '#77DBDB'],
          ]}
          options={{
            width: pathName === '/' ? 200 : 440,
            height: pathName === '/' ? 330 : 500,
            bar: { groupWidth: '100%' },
            legend: { position: 'none' },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
      <div className={classNames('')} id="waterExpanded"></div>
    </div>
  );
};

export default WaterAdventures;
