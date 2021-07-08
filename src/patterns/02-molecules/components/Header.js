import classNames from 'classnames';
import React from 'react';
import UserMenu from '../navigation/UserMenu/UserMenu';

function Header({ pathName }) {
  const pageName = (pathName) => {
    switch (pathName) {
      case '/':
        return 'Dashboard';
      case '/markets':
        return 'Top Markets';
      case '/water':
        return 'Water Adventures';
      case '/value':
        return 'Value Gap';
      case '/confidence':
        return 'Tourism Confidence';
      case '/sentiment':
        return 'Family Sentiment';
      default:
        return '';
    }
  };
  return (
    <header
      className={classNames(
        'static',
        'top-0',
        'p-4',
        'sm:px-6',
        'bg-white-dark',
        'sm:bg-white-dark',
        'z-10'
      )}>
      <div
        className={classNames(
          'flex',
          'items-center',
          'justify-end',
          'sm:justify-between',
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
          'bg-white',
          'sm:bg-white-dark',
          'sm:shadow-none'
        )}>
        <h1 className={classNames('hed1', 'text-black', 'hidden', 'sm:block')}>
          {pageName(pathName)}
        </h1>
        <UserMenu />

      </div>
      <div
        id="mobileTitle"
        className={classNames('block', 'bg-white-dark', 'sm:hidden')}>
        <h1 className={classNames('hed1', 'text-black')}>
          {pageName(pathName)}
        </h1>
      </div>
    </header>
  );
}

export default Header;
