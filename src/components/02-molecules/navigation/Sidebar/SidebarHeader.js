import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';

import './Sidebar.css';

const SidebarHeader = () => {
  return (
    <div
      className={classNames(
        'flex',
        'justify-between',
        'mb-10',
        'pr-3',
        'sm:px-2'
      )}
    >
      <button
        className={classNames(
          'lg:hidden',
          'text-gray-500',
          'hover:text-gray-400'
        )}
      >
        <span className="sr-only">Close sidebar</span>
        <svg
          className={classNames('w-10', 'h-10', 'fill-current')}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
        </svg>
          </button>
            <Logo size="Large" color="Sea Foam Teal" />
    </div>
  );
};

export default SidebarHeader;
