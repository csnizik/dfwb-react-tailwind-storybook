import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../01-atoms/images/Logo/Logo';
import Icon from '../../../01-atoms/images/Icon/Icon';
import classNames from 'classnames';

function Sidebar({ sidebarOpen, setSidebarOpen, pathName }) {
  const widthCollapsed = '20'; // Tailwind value for collapsed width on <640px breakpoints
  const widthFull = '64'; // Tailwind value for full width on all breakpoints
  const trigger = useRef(null);
  const sidebar = useRef(null);

  // close on click outside sidebar
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if ESC is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <>
      <div
        id="sidebarBackdrop"
        className={classNames(
          'fixed',
          'inline',
          'inset-0',
          'bg-gray-900',
          'bg-opacity-40',
          'sm:hidden',
          'w-screen',
          'h-screen',
          'z-20',
          'sm:z-0',
          'sm-hidden',
          'transition-opacity',
          'duration-200',
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}></div>
      <div
        id="sidebar"
        ref={sidebar}
        className={classNames(
          'fixed',
          'sm:relative',
          'inset-0',
          sidebarOpen ? `w-${widthFull}` : `w-${widthCollapsed}`,
          `sm:w-${widthFull}`,
          'transform',
          'sm:transform-none',
          'origin-left',
          'transition-all',
          'sm:transition-none',
          'duration-200',
          'ease-in-out',
          'bg-blue-dark',
          'z-30',
          'flex',
          'flex-col',
          'space-y-6',
          'justify-start'
        )}>
        <div
          className={classNames(
            'flex-grow',
            'flex',
            'flex-col',
            'justify-start'
          )}>
          <NavLink exact to="/">
            <Logo />
          </NavLink>
          <ul className={classNames('self-end', 'text-right', 'space-y-2')}>
            <li
              className={classNames(
                'list-none',
                'py-3',
                'pl-5',
                'rounded-bl-full',
                'rounded-tl-full',
                pathName === '/' ? 'bg-white-dark' : '',
                pathName
              )}>
              <div
                className={classNames(
                  'flex',
                  'items-center',
                  sidebarOpen
                    ? 'justify-start'
                    : 'justify-end sm:justify-start',
                  sidebarOpen ? 'w-52' : 'w-auto  sm:w-52',
                  'transform',
                  'transition-all',
                  'duration-200',
                  'origin-right',
                  'listItem'
                )}>
                <div className={classNames('listItemIcon', 'pr-3')}>
                  <NavLink exact to="/">
                    <Icon
                      type="Dashboard"
                      size="m"
                      color={pathName === '/' ? 'black' : 'teal'}
                    />
                  </NavLink>
                </div>
                <div
                  className={classNames(
                    'listItemText',
                    pathName === '/' ? 'text-black' : 'text-teal',
                    !sidebarOpen ? 'hidden sm:block' : ''
                  )}>
                  <NavLink exact to="/">
                    Dashboard
                  </NavLink>
                </div>
              </div>
            </li>
            <li
              className={classNames(
                'list-none',
                'py-3',
                'pl-5',
                'rounded-bl-full',
                'rounded-tl-full',
                pathName === '/markets' ? 'bg-white-dark' : '',
                pathName
              )}>
              <div
                className={classNames(
                  'flex',
                  'items-center',
                  sidebarOpen
                    ? 'justify-start'
                    : 'justify-end sm:justify-start',
                  sidebarOpen ? 'w-52' : 'w-auto sm:w-52',
                  'transform',
                  'transition-all',
                  'duration-200',
                  'origin-right',
                  'listItem'
                )}>
                <div className={classNames('listItemIcon', 'pr-3')}>
                  <NavLink exact to="/markets">
                    <Icon
                      type="Network"
                      size="m"
                      color={pathName === '/markets' ? 'black' : 'teal'}
                    />
                  </NavLink>
                </div>
                <div
                  className={classNames(
                    'listItemText',
                    pathName === '/markets' ? 'text-black' : 'text-teal',
                    !sidebarOpen ? 'hidden sm:block' : ''
                  )}>
                  <NavLink exact to="/markets">
                    Top Markets
                  </NavLink>
                </div>
              </div>
            </li>
            <li
              className={classNames(
                'list-none',
                'py-3',
                'pl-5',
                'rounded-bl-full',
                'rounded-tl-full',
                pathName === '/water' ? 'bg-white-dark' : '',
                pathName
              )}>
              <div
                className={classNames(
                  'flex',
                  'items-center',
                  sidebarOpen
                    ? 'justify-start'
                    : 'justify-end sm:justify-start',
                  sidebarOpen ? 'w-52' : 'w-auto sm:w-52',
                  'transform',
                  'transition-all',
                  'duration-200',
                  'origin-right',
                  'listItem'
                )}>
                <div className={classNames('listItemIcon', 'pr-3')}>
                  <NavLink exact to="/water">
                    <Icon
                      type="Pin"
                      size="m"
                      color={pathName === '/water' ? 'black' : 'teal'}
                    />
                  </NavLink>
                </div>
                <div
                  className={classNames(
                    // 'pl-3',
                    'listItemText',
                    pathName === '/water' ? 'text-black' : 'text-teal',
                    !sidebarOpen ? 'hidden sm:block' : ''
                  )}>
                  <NavLink exact to="/water">
                    Water Adventures
                  </NavLink>
                </div>
              </div>
            </li>
            <li
              className={classNames(
                'list-none',
                'py-3',
                'pl-5',
                'rounded-bl-full',
                'rounded-tl-full',
                pathName === '/value' ? 'bg-white-dark' : '',
                pathName
              )}>
              <div
                className={classNames(
                  'flex',
                  'items-center',
                  sidebarOpen
                    ? 'justify-start'
                    : 'justify-end sm:justify-start',
                  sidebarOpen ? 'w-52' : 'w-auto sm:w-52',
                  'transform',
                  'transition-all',
                  'duration-200',
                  'origin-right',
                  'listItem'
                )}>
                <div className={classNames('listItemIcon', 'pr-3')}>
                  <NavLink exact to="/value">
                    <Icon
                      type="Graph"
                      size="m"
                      color={pathName === '/value' ? 'black' : 'teal'}
                    />
                  </NavLink>
                </div>
                <div
                  className={classNames(
                    // 'pl-3',
                    'listItemText',
                    pathName === '/value' ? 'text-black' : 'text-teal',
                    !sidebarOpen ? 'hidden sm:block' : ''
                  )}>
                  <NavLink exact to="/value">
                    Value Gap
                  </NavLink>
                </div>
              </div>
            </li>
            <li
              className={classNames(
                'list-none',
                'py-3',
                'pl-5',
                'rounded-bl-full',
                'rounded-tl-full',
                pathName === '/confidence' ? 'bg-white-dark' : '',
                pathName
              )}>
              <div
                className={classNames(
                  'flex',
                  'items-center',
                  sidebarOpen
                    ? 'justify-start'
                    : 'justify-end sm:justify-start',
                  sidebarOpen ? 'w-52' : 'w-auto sm:w-52',
                  'transform',
                  'transition-all',
                  'duration-200',
                  'origin-right',
                  'listItem'
                )}>
                <div className={classNames('listItemIcon', 'pr-3')}>
                  <NavLink exact to="/confidence">
                    <Icon
                      type="Pie"
                      size="m"
                      color={pathName === '/confidence' ? 'black' : 'teal'}
                    />
                  </NavLink>
                </div>
                <div
                  className={classNames(
                    'listItemText',
                    pathName === '/confidence' ? 'text-black' : 'text-teal',
                    !sidebarOpen ? 'hidden sm:block' : ''
                  )}>
                  <NavLink exact to="/confidence">
                    Tourism Confidence
                  </NavLink>
                </div>
              </div>
            </li>
            <li
              className={classNames(
                'list-none',
                'py-3',
                'pl-5',
                'rounded-bl-full',
                'rounded-tl-full',
                pathName === '/sentiment' ? 'bg-white-dark' : '',
                pathName
              )}>
              <div
                className={classNames(
                  'flex',
                  'items-center',
                  sidebarOpen
                    ? 'justify-start'
                    : 'justify-end sm:justify-start',
                  sidebarOpen ? 'w-52' : 'w-auto sm:w-52',
                  'transform',
                  'transition-all',
                  'duration-200',
                  'origin-right',
                  'listItem'
                )}>
                <div className={classNames('listItemIcon', 'pr-3')}>
                  <NavLink exact to="/sentiment">
                    <Icon
                      type="Video"
                      size="m"
                      color={pathName === '/sentiment' ? 'black' : 'teal'}
                    />
                  </NavLink>
                </div>
                <div
                  className={classNames(
                    'listItemText',
                    pathName === '/sentiment' ? 'text-black' : 'text-teal',
                    !sidebarOpen ? 'hidden sm:block' : ''
                  )}>
                  <NavLink exact to="/sentiment">
                    Family Sentiment
                  </NavLink>
                </div>
              </div>
            </li>
          </ul>
          <div
            className={classNames(
              'flex',
              'flex-col',
              'pt-8',
              'mx-2',
              'items-center',
              'justify-center'
            )}>
            <p className={classNames('text-white', 'hidden', 'sm:block')}>
              PDF Report
            </p>
            <p
              className={classNames(
                'text-white',
                'font-light',
                'hidden',
                'sm:block'
              )}>
              Download the monthly report
            </p>
            <button>
              <div
                className={classNames(
                  'h-12',
                  'w-12',
                  'sm:w-48',
                  'bg-teal',
                  'rounded-full',
                  'flex',
                  'justify-center',
                  'items-center',
                  'ring-0',
                  'sm:py-7',
                  'sm:px-5',
                  'sm:mt-3',
                  'sm:space-between',
                  'sm:space-x-3',
                )}>
                <p className={classNames('hidden', 'sm:block')}>Download</p>
                <Icon size="m" type="Download" />
              </div>
            </button>
          </div>
          <div
            className={classNames(
              'flex-grow',
              'flex',
              'flex-col',
              'justify-end',
              'p-4'
            )}>
            <button
              id="sidebarToggle"
              ref={trigger}
              className={classNames(
                'sm:hidden',
                'box-border',
                'transform',
                'transition-all',
                'duration-200',
                sidebarOpen ? 'rotate-180' : 'rotate-0',
                'z-50',
                'h-12',
                'w-12',
                'bg-teal',
                'rounded-full',
                'flex',
                'justify-center',
                'items-center',
                'ring-0'
              )}>
              <div
                className={classNames('cursor-pointer')}
                onClick={() => setSidebarOpen(!sidebarOpen)}>
                <Icon type="SlideRight" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
