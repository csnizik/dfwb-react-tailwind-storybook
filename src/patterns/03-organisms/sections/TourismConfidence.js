import classNames from 'classnames';
// import React, { useState } from 'react';
import React from 'react';
import Chart from '../../02-molecules/blocks/Chart/Chart';
import Icon from '../../01-atoms/images/Icon/Icon';
import { Link, NavLink } from 'react-router-dom';
import EditMenu from '../../02-molecules/navigation/EditMenu/EditMenu';

const TourismConfidence = ({ pathName }) => {
  // const [cardExpanded, setCardExpanded] = useState(false);
  return (
    <div
      className={classNames(
        'flex',
        'flex-col',
        'col-span-3',
        pathName !== '/confidence' ? 'lg:col-span-1' : '',
        'p-3',
        'rounded-lg',
        'shadow',
        'bg-white',
        pathName === '/confidence' ? 'h-screen' : ''
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
        <NavLink to="/confidence"
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
          <Icon size="small" color="Navy Sky" type="Pie" />
          <h3 className={classNames('hed-3', 'text-blue-dark')}>
            Tourism Confidence
          </h3>
        </NavLink>
        {pathName === '/' && (
          <NavLink to="/confidence">
            <div className={classNames('self-end', 'flex', 'items-center')}>
              <button
                className={classNames(
                  `bg-teal`,
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
        {pathName === '/confidence' && (
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
        Measures local sentiment towards tourism
      </p>
      <div id="confidenceChart" className={classNames('self-center')}>
        <Chart
          chartType="PieChart"
          data={[
            ['Tourism Sentiment', 'Percent'],
            ['Against of tourists', 20],
            ['Accepting of tourists', 80],
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
            pieHole: 0.5,
            pieSliceText: 'Percent',
            pieSliceTextStyle: {
              color: 'black',
            },
            legend: { position: 'none' },
            colors: ['#48AAED', '#77DBDB', '#FCB3B1'],
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
      <div className={classNames('')} id="confidenceExpanded"></div>
    </div>
  );
};

export default TourismConfidence;
