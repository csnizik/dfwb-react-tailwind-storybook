import classNames from 'classnames';
import React from 'react';

function Header({ pathName }) {
  return (
    <header
      className={classNames(
        'sticky',
        'top-0',
        'px-4',
        'sm:px-6',
        'lg:px-8',
        pathName == '/' ? 'flex-grow' : 'hidden'
      )}>
      <div
        className={classNames(
          'flex',
          'items-center',
          'justify-end',
          'sm:justify-between',
          'bg-white',
          'sm:bg-white-dark',
          'h-12',
          'mb-1',
          'sm:-mb-px',
          '-ml-20',
          'sm:ml-0',
          '-mr-4',
          'sm:mr-0',
          'pr-4',
          'sm:pr-0',
          'shadow-sm',
          'sm:shadow-none'
        )}>
        <h1 className={classNames('hed1', 'text-black', 'hidden', 'sm:block')}>
          Dashboard
        </h1>
        <div
          className={classNames(
            'bg-white',
            'flex',
            'justify-self-end',
            'rounded-full',
            'border',
            'border-gray-300',
            'space-x-4',
            'px-1',
            'py-1',
            'items-center',
            'truncate',
            'text-xs',
            'sm:text-base'
          )}>
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
              'mr-2',
              'flex',
              'items-center',
              'justify-center'
            )}>
            FL
          </div>
          First Last
        </div>
      </div>
      <div id="mobileTitle" className={classNames('block', 'sm:hidden')}>
        <h1 className={classNames('hed1', 'text-black')}>Dashboard</h1>
      </div>
    </header>
  );
}

export default Header;
