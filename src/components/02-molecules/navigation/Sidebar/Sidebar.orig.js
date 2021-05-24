import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import SidebarHeader from './SidebarHeader';
import Logo from '../Logo';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import './Sidebar.css';


function Sidebar({ sidebarOpen = true }) {



  return (
    <>
      <div className="lg:w-64">
        {/* Sidebar backdrop (mobile only) */}
        <div
          className={classNames(
            'fixed',
            'inset-0',
            'bg-gray-900',
            'bg-opacity-30',
            'z-40',
            'lg:hidden',
            'lg:z-auto',
            'transition-opacity',
            'duration-200',
            `${sidebarOpen ? 'opacity-80' : 'opacity-0'}`,
            'pointer-events-none'
          )}
          aria-hidden="true"
        ></div>

        <div
          id="sidebar"
          className={classNames(
            'absolute',
            'z-40',
            'left-0',
            'top-0',
            'lg-static',
            'lg:left-auto',
            'lg:top-auto',
            'lg:translate-x-0',
            'transform',
            'h-screen',
            'overflow-y-scroll',
            'lg:overflow-y-auto',
            'no-scrollbar',
            'w-64',
            'flex-shrink-0',
            'p-4',
            'transition-transform',
            'duration-200',
            'ease-in-out',
            'grid-cols-12',
            'bg-navy',
          )}
        >
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
            <div className="max-w-full">
              <Logo size="Large" color="Sea Foam Teal" />
            </div>
            <div className="max-w-full">
              <ul className="mt-3">
                <li
                  className={classNames(
                    'px-3',
                    'py-2',
                    'rounded-sm',
                    'mb-0.5',
                    'last:mb-0'
                  )}
                >
                  Dashboard
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
