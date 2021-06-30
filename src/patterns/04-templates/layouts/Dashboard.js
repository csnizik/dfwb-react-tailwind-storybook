import React from 'react';
import classNames from 'classnames';
import AtAGlance from '../../03-organisms/sections/AtAGlance';
import TopMarkets from '../../03-organisms/sections/TopMarkets';
import WaterAdventures from '../../03-organisms/sections/WaterAdventures';
import ValueGap from '../../03-organisms/sections/ValueGap';
import TourismConfidence from '../../03-organisms/sections/TourismConfidence';
import FamilySentiment from '../../03-organisms/sections/FamilySentiment';
import Button from '../../01-atoms/buttons/Button';
import Icon from '../../01-atoms/images/Icon/Icon';

const Dashboard = ({ pathName, ...props }) => {
  const fullDisplay = () => {};

  const pageHeading = (path) => {
    switch (path) {
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
        return 'Dashboard';
    }
  };
  return (
    <section id="container" className={classNames('relative', 'min-h-full', 'w-full','bg-white-dark','p-8','flex','flex-col','justify-start','space-y-4')}>
      <div id="r1" className={classNames(pathName === '/' ? 'flex-grow-0' : 'hidden', 'flex','justify-between','items-start','flex-grow-0')}>
        <div id="r1c1" className={classNames('flex-grow-1', 'flex', 'justify-between', 'items-end')}>
          <h1 className={classNames('hed1', 'text-black')}>{pageHeading(pathName)}</h1>
          <p className={classNames('xs','pl-4','pb-1','flex','text-black','italic')}>
            <div className={classNames('px-1', 'pb-1', 'text-gray-300')}>
              <Icon type="Pencil" color="Gray" size="s" />
            </div>
            Edit Layout
          </p>
        </div>
        <Button className={classNames("self-center")}>Login</Button>
      </div>
      <div id="r2" className={classNames(pathName === '/' ? 'flex-grow-0' : 'hidden')}>
        <AtAGlance />
      </div>
      <div id="r3" className={classNames('bg-pink','flex-grow')}>

      </div>


    </section>
  );
};

export default Dashboard;
