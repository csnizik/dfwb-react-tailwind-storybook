import classNames from 'classnames';
import React, { useState } from 'react';
import Chart from '../../02-molecules/blocks/Chart/Chart';
import Icon from '../../01-atoms/images/Icon/Icon';
import { NavLink } from 'react-router-dom';

const TopMarkets = ({ pathName }) => {
  const [cardExpanded, setCardExpanded] = useState(false);
  return (
    <div
      className={classNames(
        'flex',
        'flex-col',
        'col-span-3',
        pathName !== '/markets' ? 'lg:col-span-2' : '',
        'p-3',
        'rounded-lg',
        'shadow',
        'bg-white',
        pathName === '/markets' ? 'h-screen' : ''
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
          <Icon size="small" color="Navy Sky" type="Network" />
          <h3 className={classNames('hed-3', 'text-blue-dark')}>Top Markets</h3>
        </div>
        {pathName === '/' && (
          <NavLink to="/markets">
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
          </NavLink>
        )}
        {pathName === '/markets' && (
          <NavLink to="">
          <div className={classNames('self-end', 'flex', 'items-center')}>
            <button
              className={classNames(
                `rounded-bl-lg`,
                `w-12`,
                `h-12`,
                'flex',
                'justify-center',
                'items-center'
              )}>
              <Icon color="Navy Sky" size="Small" type="ThreeDots" />
            </button>
          </div>
        </NavLink>
        )}
      </div>
      <p
        className={classNames(
          'text-gray-500',
          'text-sm',
          pathName === '/' ? 'visible' : 'invisible'
        )}>
        Increased arrivals from key markets and increased visitor spending per
        market
      </p>
      <div id="marketsChart" className={classNames('self-center')}>
        <Chart
          // width={pathName === '/' ? '440px' : '600px'}
          chartType="GeoChart"
          data={[
            ['City', 'Total Spend', 'Arrivals'],
            ['Atlanta', 18688021, 102359],
            ['Dallas', 12693514, 53605],
            ['Chicago', 2571710, 9763],
            ['DC', 1860281, 6055],
            ['Nashville', 7455620, 33111],
            ['Detroit', 1539163, 6936],
            ['Minneapolis', 382824, 1717],
            ['Saint Louis', 4794885, 19638],
            ['Indianapolis', 1982138, 7998],
            ['Cincinnati', 3651065, 14541],
          ]}
          options={{
            width: 460,
            height: 300,
            region: 'US',
            displayMode: 'markers',
            colorAxis: { colors: ['#77DBDB', '#48AAED'] },
            resolution: 'provinces',
            enableRegionInteractivity: true,
            magnifyingGlass: {
              enable: true,
              zoomFactor: 12,
            },
          }}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey="YOUR_KEY_HERE"
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
      <div className={classNames('')} id="marketsExpanded"></div>
    </div>
  );
};

export default TopMarkets;
