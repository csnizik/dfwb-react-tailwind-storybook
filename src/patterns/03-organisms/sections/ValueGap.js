import classNames from 'classnames';
// import React, { useState } from 'react';
import React from 'react';
import Chart from '../../02-molecules/blocks/Chart/Chart';
import Icon from '../../01-atoms/images/Icon/Icon';
import { Link, NavLink } from 'react-router-dom';
import EditMenu from '../../02-molecules/navigation/EditMenu/EditMenu';

const ValueGap = ({ pathName }) => {
  // const [cardExpanded, setCardExpanded] = useState(false);
  return (
    <div
      className={classNames(
        'flex',
        'flex-col',
        'col-span-3',
        pathName !== '/value' ? 'lg:col-span-1' : '',
        'p-3',
        'rounded-lg',
        'shadow',
        'bg-white',
        pathName === '/value' ? 'h-screen' : ''
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
          <Icon size="small" color="Navy Sky" type="Graph" />
          <h3 className={classNames('hed-3', 'text-blue-dark')}>Value Gap</h3>
        </div>
        {pathName === '/' && (
          <NavLink to="/value">
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
        {pathName === '/value' && (
          <EditMenu className="relative inline-flex">
            <li>
              <Link
                className="font-medium text-sm text-gray-600 hover:text-gray-800 flex py-1 px-3"
                to="#0">
                Download PDF
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-gray-600 hover:text-gray-800 flex py-1 px-3"
                to="#0">
                Option 2
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-red-500 hover:text-red-600 flex py-1 px-3"
                to="/">
                Return to Dashboard
              </Link>
            </li>
          </EditMenu>
        )}
      </div>
      <p
        className={classNames(
          'text-gray-500',
          'text-sm',
          pathName === '/' ? 'visible' : 'invisible'
        )}>
        Measures decreased dark green gap
      </p>
      <div id="valueChart" className={classNames('self-center')}>
        <Chart
          chartType="ComboChart"
          data={[
            [
              'Month',
              'FY 2019 Revenue',
              'FY 2019 Occupancy',
              'FY 2020 Occupancy',
            ],
            [new Date(2020, 0), 10, 60, 70],
            [new Date(2020, 1), 8, 50, 60],
            [new Date(2020, 2), 7, 45, 50],
            [new Date(2020, 3), 7.5, 55, 60],
            [new Date(2020, 4), 8, 75, 80],
            [new Date(2020, 5), 11, 60, 84],
            [new Date(2020, 6), 11, 30, 80],
            [new Date(2020, 7), 20, 55, 85],
            [new Date(2020, 8), 30, 80, 90],
            [new Date(2020, 9), 70, 83, 85],
            [new Date(2020, 10), 65, 70, 73],
            [new Date(2020, 11), 50, 72, 65],
          ]}
          formatters={{
            type: 'DateFormat',
            column: 0,
            options: {
              pattern: 'MMM yyyy',
            },
          }}
          options={{
            width: pathName === '/' ? 220 : 440,
            height: pathName === '/' ? 330 : 500,
            seriesType: 'bars',
            series: {
              1: { type: 'line' },
              2: { type: 'line' },
            },
            bar: { groupWidth: '100%' },
            legend: { position: 'none' },
            colors: ['#48AAED', '#77DBDB', '#FCB3B1'],
            vAxes: {
              0: {
                title: 'TDT Collections ($ millions)',
                titleTextStyle: { bold: true, italic: false },
                textPosition: 'none',
                minorGridlines: {
                  color: '#fff',
                },
              },
            },
            hAxes: {
              0: {
                format: 'MMM',
                gridlines: {
                  color: '#fff',
                },
              },
            },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
      <div className={classNames('')} id="valueExpanded"></div>
    </div>
  );
};

export default ValueGap;
