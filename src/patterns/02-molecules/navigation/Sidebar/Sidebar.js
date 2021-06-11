import React, { useState } from 'react';
import classNames from 'classnames';
import Icon from '../../../01-atoms/images/Icon/Icon';
import Logo from '../../../01-atoms/images/Logo/Logo';
import { NavLink } from 'react-router-dom';

import './Sidebar.css';

function Sidebar({ pathName, ...props }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <input
        type="checkbox"
        checked={isExpanded}
        className={classNames(
          'openSidebarMenu',
          'transition-all',
          'box-border',
          'hidden'
        )}
        id="openSidebarMenu"
      />
      <div
        id="sidebarMenu"
        className={classNames(
          'md:w-64',
          'bg-blue-dark',
          'min-h-full',
          'flex',
          'flex-col',
          'items-end',
          'justify-start'
        )}
      >
        <Logo size="FullWidth" />

        <ul id="page-nav">
          <li
            className={classNames(
              'list-none',
              '-mr-7',
              'py-4',
              'pl-6',
              'rounded-bl-full',
              'rounded-tl-full',
              pathName === '/' ? 'bg-white-dark' : '',
              pathName
            )}
          >
            <div
              className={classNames(
                'flex',
                'flex-row',
                'items-center',
                'w-56',
                'listItem'
              )}
            >
              <div className={classNames('listItemIcon', pathName)}>
                <Icon type="Dashboard" size="Medium" color={ pathName  === '/' ? 'black' : 'Crystal-Clear Teal'} />
              </div>
              <div className={classNames('pl-3', 'listItemText', pathName === '/' ? 'text-black' : 'text-teal')}>
                <NavLink to="/">Dashboard</NavLink>
              </div>
            </div>
          </li>
          <li
            className={classNames(
              'list-none',
              'bg-transparent',
              '-mr-7',
              'py-4',
              'pl-6',
              'rounded-bl-full',
              'rounded-tl-full',
              pathName === '/markets' ? 'bg-white-dark' : ''
            )}
          >
            <div
              className={classNames(
                'flex',
                'flex-row',
                'items-center',
                'w-56',
                'listItem'
              )}
            >
              <div className={classNames('listItemIcon')}>
                <Icon type="Network" size="Medium" color={ pathName  === '/markets' ? 'black' : 'Crystal-Clear Teal'} />
              </div>
              <div className={classNames('pl-3', 'listItemText', pathName === '/markets' ? 'text-black' : 'text-teal')}>
                <NavLink to="markets">Top Markets</NavLink>
              </div>
            </div>
          </li>
          <li
            className={classNames(
              'list-none',
              'bg-transparent',
              '-mr-7',
              'py-4',
              'pl-6',
              'rounded-bl-full',
              'rounded-tl-full',
              pathName === '/water' ? 'bg-white-dark' : ''
            )}
          >
            <div
              className={classNames(
                'flex',
                'flex-row',
                'items-center',
                'w-56',
                'listItem'
              )}
            >
              <div className={classNames('listItemIcon')}>
                <Icon type="Pin" size="Medium" color={ pathName  === '/water' ? 'black' : 'Crystal-Clear Teal'} />
              </div>
              <div className={classNames('pl-3', 'listItemText', pathName === '/water' ? 'text-black' : 'text-teal')}>
                <NavLink to="water">Water Adventures</NavLink>
              </div>
            </div>
          </li>
          <li
            className={classNames(
              'list-none',
              'bg-transparent',
              '-mr-7',
              'py-4',
              'pl-6',
              'rounded-bl-full',
              'rounded-tl-full',
              pathName === '/value' ? 'bg-white-dark' : ''
            )}
          >
            <div
              className={classNames(
                'flex',
                'flex-row',
                'items-center',
                'w-56',
                'listItem'
              )}
            >
              <div className={classNames('listItemIcon')}>
                <Icon type="Graph" size="Medium" color={ pathName  === '/value' ? 'black' : 'Crystal-Clear Teal'} />
              </div>
              <div className={classNames('pl-3', 'listItemText', pathName === '/value' ? 'text-black' : 'text-teal')}>
                <NavLink to="value">Value Gap</NavLink>
              </div>
            </div>
          </li>
          <li
            className={classNames(
              'list-none',
              'bg-transparent',
              '-mr-7',
              'py-4',
              'pl-6',
              'rounded-bl-full',
              'rounded-tl-full',
              pathName === '/confidence' ? 'bg-white-dark' : ''
            )}
          >
            <div
              className={classNames(
                'flex',
                'flex-row',
                'items-center',
                'w-56',
                'listItem'
              )}
            >
              <div className={classNames('listItemIcon')}>
                <Icon type="Pie" size="Medium" color={ pathName  === '/confidence' ? 'black' : 'Crystal-Clear Teal'} />
              </div>
              <div className={classNames('pl-3', 'listItemText', pathName === '/confidence' ? 'text-black' : 'text-teal')}>
                <NavLink to="confidence">Tourism Confidence</NavLink>
              </div>
            </div>
          </li>
          <li
            className={classNames(
              'list-none',
              'bg-transparent',
              '-mr-7',
              'py-4',
              'pl-6',
              'rounded-bl-full',
              'rounded-tl-full',
              pathName === '/sentiment' ? 'bg-white-dark' : ''
            )}
          >
            <div
              className={classNames(
                'flex',
                'flex-row',
                'items-center',
                'w-56',
                'listItem'
              )}
            >
              <div className={classNames('listItemIcon')}>
                <Icon type="Video" size="Medium" color={ pathName  === '/sentiment' ? 'black' : 'Crystal-Clear Teal'} />
              </div>
              <div className={classNames('pl-3', 'listItemText', pathName === '/sentiment' ? 'text-black' : 'text-teal')}>
                <NavLink to="sentiment">Family Sentiment</NavLink>
              </div>
            </div>
          </li>
        </ul>
        <label
          id="sidebarIcon"
          htmlFor="openSidebarMenu"
          className={classNames(
            'md:hidden',
            'transition-all',
            'box-border',
            'absolute',
            'z-50',
            'h-12',
            'w-12',
            'bottom-6',
            'left-4',
            'bg-teal',
            'rounded-full',
            'flex',
            'justify-center',
            'items-center',
            'ring-0'
          )}
        >
          <div
            className={classNames('cursor-pointer')}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <Icon type="SlideRight" />
          </div>
        </label>
      </div>
    </>
  );
}

export default Sidebar;
