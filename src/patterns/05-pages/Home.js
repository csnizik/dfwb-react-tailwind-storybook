import classNames from 'classnames';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../02-molecules/navigation/Sidebar';
import Dashboard from '../04-templates/layouts/Dashboard';

const Home = () => {
  const pathName = useLocation().pathname; // Home path /
  return (
    <div
      className={classNames(
        'flex',
        'flex-row',
        'space-between-3',
        'min-h-screen',
        'overflow-hidden'
      )}
    >
      <Sidebar pathName={pathName} />

      <main className={classNames('flex-grow')}>
        <Dashboard pathName={pathName}/>
      </main>
    </div>
  );
};

export default Home;
