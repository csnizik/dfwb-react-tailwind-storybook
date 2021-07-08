import classNames from 'classnames';
import React, { useState } from 'react';
import Sidebar from '../02-molecules/navigation/Sidebar';
import Header from '../02-molecules/components/Header';
import AtAGlance from '../03-organisms/sections/AtAGlance';
import TopMarkets from '../03-organisms/sections/TopMarkets';
import WaterAdventures from '../03-organisms/sections/WaterAdventures';
import ValueGap from '../03-organisms/sections/ValueGap';
import TourismConfidence from '../03-organisms/sections/TourismConfidence';
import FamilySentiment from '../03-organisms/sections/FamilySentiment';

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
          'pt-4',
          'sm:ml-0',
          'flex-grow',
          'flex',
          'flex-col',
          'justify-start',
          'overflow-y-scroll',
          'overflow-x-hidden',
          'bg-white-dark'
        )}>
        <Header pathName={pathName} />
        <main>
          <div className={classNames('m-6', 'grid', 'grid-cols-3', 'gap-6')}>
            {/* Cards */}
            {pathName === '/' && <AtAGlance pathName={pathName} />}
            {(pathName === '/' || pathName === '/markets') && (
              <TopMarkets pathName={pathName} />
            )}
            {(pathName === '/' || pathName === '/water') && (
              <WaterAdventures pathName={pathName} />
            )}
            {(pathName === '/' || pathName === '/value') && (
              <ValueGap pathName={pathName} />
            )}
            {(pathName === '/' || pathName === '/confidence') && (
              <TourismConfidence pathName={pathName} />
            )}
            {(pathName === '/' || pathName === '/sentiment') && (
              <FamilySentiment pathName={pathName} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
