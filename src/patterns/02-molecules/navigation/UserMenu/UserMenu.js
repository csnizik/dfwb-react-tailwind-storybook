import React, { useState, useRef, useEffect } from 'react';
import Transition from '../../../../utilities/Transition';
import Icon from '../../../01-atoms/images/Icon';
import classNames from 'classnames';

function UserMenu({ children, ...rest }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if esc key
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div {...rest}>
      <button
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
        className={classNames(
          'bg-white',
          'flex',
          'space-between',
          'rounded-full',
          'border',
          'border-gray-300',
          'space-x-3',
          'p-1',
          'items-center',
          'truncate',
          'text-xs',
          'sm:text-base',
          'h-11'
        )}>
        <div
          className={classNames(
            'flex',
            'flex-row',
            'items-center',
            'justify-between',
            'flex-1',
            'space-x-3'
          )}
          ref={trigger}>
          <div
            className={classNames(
              'w-6',
              'sm:w-8',
              'h-6',
              'sm:h-8',
              'py-1',
              'px-1',
              'rounded-full',
              'bg-blue-dark',
              'text-white',
              loggedIn ? 'flex' : 'hidden',
              'items-center',
              'justify-center',
              'text-xs'
            )}>
            KC
          </div>
          <div>{loggedIn ? 'Kelsey Cahill' : 'Login'}</div>
        </div>
        <button
          className={classNames('')}
          onClick={() => setLoggedIn(false)}></button>
        {loggedIn && <Icon size="m" type="SlideRight" />}
      </button>
      <Transition
        show={dropdownOpen}
        tag="div"
        className={classNames(
          'origin-top-right',
          'absolute',
          'z-50',
          'top-0',
          '-right-1',
          'w-4/5',
          'sm:w-80',
          'h-auto',
          'bg-teal',
          'rounded-l-3xl',
          'shadow-lg',
          'overflow-hidden',
          'p-5',
          'flex'
        )}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0">
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
          className={classNames(
            'flex',
            'flex-col',
            'flex-1',
            'justify-between',
            'items-center',
            'space-y-5'
          )}>
          <div
            className={classNames(
              'flex',
              'flex-row',
              'min-w-full',
              loggedIn ? 'justify-between' : 'justify-end'
            )}>
            <div
              className={classNames(
                'flex',
                'space-x-3',
                'justify-center',
                'items-center',
                !loggedIn ? 'hidden' : ''
              )}>
              <Icon size="xs" color="Navy Sky" type="Pencil" />
              <p
                className={classNames(
                  'text-sm',
                  'italic',
                  'font-light',
                  'font-blue-dark'
                )}>
                Edit profile
              </p>
            </div>
            <button
              className={classNames(
                'text-sm',
                'font-light',
                'text-black',
                'text-2xl'
              )}
              onClick={() => setDropdownOpen(false)}>
              X
            </button>
          </div>
          {loggedIn ? (
            <div
              className={classNames(
                'flex',
                'flex-col',
                'space-y-2',
                'items-center'
              )}>
              <div
                className={classNames(
                  'h-36',
                  'w-36',
                  'bg-white',
                  'border-4',
                  'border-blue-dark',
                  'rounded-full',
                  'flex',
                  'justify-center',
                  'items-center'
                )}>
                <Icon size="l" color="NavySky" type="Dashboard" />
              </div>
              <h2 className={classNames('hed2')}>Kelsey Cahill</h2>
              <p className={classNames('font-light', 'text-blue-dark')}>
                Position title
              </p>
            </div>
          ) : (
            <form className={classNames('flex', 'flex-col', 'space-y-6')}>
              <input
                type="text"
                id="username"
                className={classNames(
                  'h-8',
                  'rounded-xl',
                  'px-6',
                  'py-5',
                  'placeholder-gray-300'
                )}
                placeholder="Username"
              />
              <input
                type="password"
                id="username"
                className={classNames(
                  'h-8',
                  'rounded-xl',
                  'px-6',
                  'py-5',
                  'placeholder-gray-300'
                )}
                placeholder="Password"
              />
            </form>
          )}
          <button
            className={classNames(
              'flex',
              loggedIn ? 'justify-between' : 'justify-center',
              'items-center',
              'bg-blue-dark',
              'w-full',
              'py-4',
              'px-5',
              'rounded-full'
            )}
            onClick={() => setDropdownOpen(false)}>
            <p
              className={classNames('text-teal')}
              onClick={() => setLoggedIn(!loggedIn)}>
              {loggedIn ? 'Logout' : 'Login'}
            </p>
            {loggedIn && <Icon size="m" type="SlideRight" color="teal" />}
          </button>
        </div>
      </Transition>
    </div>
  );
}

export default UserMenu;
