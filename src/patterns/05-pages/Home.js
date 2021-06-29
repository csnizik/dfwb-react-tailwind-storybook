import classNames from 'classnames';
import React, { useState } from 'react';
import Sidebar from '../02-molecules/navigation/Sidebar';
import Header from '../02-molecules/components/Header';

const Home = ({ pathName }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={classNames('flex', 'h-screen', 'overflow-hidden')}>
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        pathName={pathName}
      />
      <div
        className={classNames(
          'relative',
          'ml-20',
          'sm:ml-0',
          'flex-grow',
          'flex',
          'flex-col',
          'overflow-y-auto',
          'overflow-x-hidden',
          'bg-white-dark'
        )}>
        <Header pathName={pathName} />
      </div>
    </div>
  );
};

export default Home;
