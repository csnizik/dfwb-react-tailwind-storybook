import React from 'react';
import classNames from 'classnames';
import AtAGlance from '../../03-organisms/sections/AtAGlance';
import TopMarkets from '../../03-organisms/sections/TopMarkets';
import WaterAdventures from '../../03-organisms/sections/WaterAdventures';
import ValueGap from '../../03-organisms/sections/ValueGap';
import TourismConfidence from '../../03-organisms/sections/TourismConfidence';
import FamilySentiment from '../../03-organisms/sections/FamilySentiment';

const Dashboard = ({ pathName, ...props }) => {
  return (
    <section
      className={classNames(
        'relative',
        'min-w-full',
        'min-h-screen',
        'transition-transform',
        pathName !== '/' ? '-translate-x-full' : ''
      )}
    >
      <h1>Dashboard</h1>
      <AtAGlance />
      <TopMarkets />
      <WaterAdventures />
      <ValueGap />
      <TourismConfidence />
      <FamilySentiment />
    </section>
  );
};

export default Dashboard;
