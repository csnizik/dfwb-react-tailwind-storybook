import React, { useState } from 'react';
import classNames from 'classnames';
import Icon from '../../../01-atoms/images/Icon/Icon';
import Logo from '../../../01-atoms/images/Logo/Logo';

import './Sidebar.css';

function Sidebar({ pathName, ...props }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <input
        type="checkbox"
        // checked={isExpanded}
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
          'w-full',
          'bg-blue-dark',
          'min-h-full',
          'flex',
          'flex-col',
          'items-stretch'
        )}
      >
        <div
          id="brandLogo"
          className={classNames(
            'w-full',
            'h-48',
            'flex',
            'flex-row',
            'justify-end'
          )}
        >
          <Logo size="Large" />
        </div>
      </div>
      <ul className={classNames('p-0', 'w-auto', 'fixed', 'top-48')}>
        <li
          className={classNames(
            'list-none',
            'bg-gray-200',
            '-mr-7',
            'py-4',
            'pl-6',
            'rounded-bl-full',
            'rounded-tl-full',
            pathName === '/' ? 'selectedListItem' : ''
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
              <Icon type="Dashboard" size="Medium" />
            </div>
            <div className={classNames('pl-3', 'listItemText')}>Dashboard</div>
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
            pathName === '/markets' ? 'selectedListItem' : ''
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
              <Icon type="Network" size="Medium" color="Crystal-Clear Teal" />
            </div>
            <div className={classNames('pl-3', 'text-teal', 'listItemText')}>
              Top Markets
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
            pathName === '/value' ? 'selectedListItem' : ''
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
              <Icon type="Graph" size="Medium" color="Crystal-Clear Teal" />
            </div>
            <div className={classNames('pl-3', 'text-teal', 'listItemText')}>
              Value Gap
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
            pathName === '/confidence' ? 'selectedListItem' : ''
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
              <Icon type="Pie" size="Medium" color="Crystal-Clear Teal" />
            </div>
            <div className={classNames('pl-3', 'text-teal', 'listItemText')}>
              Tourism Confidence
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
            pathName === '/sentiment' ? 'selectedListItem' : ''
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
              <Icon type="Video" size="Medium" color="Crystal-Clear Teal" />
            </div>
            <div className={classNames('pl-3', 'text-teal', 'listItemText')}>
              Family Sentiment
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
    </>
  );
}

export default Sidebar;
