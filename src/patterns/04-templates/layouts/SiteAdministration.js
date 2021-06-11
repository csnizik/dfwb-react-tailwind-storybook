import classNames from 'classnames';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../../02-molecules/navigation/Sidebar';

const Administration = () => {
  const pathName = useLocation().pathname; //
  return (
    <div
      className={classNames(
        'flex',
        'flex-row',
        'min-h-screen',
        'overflow-hidden'
      )}
    >
      <Sidebar pathName={pathName} />

      <main className={classNames('flex-grow')}>
        <h1>Administration</h1>
      </main>
    </div>
  );
};

export default Administration;
