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
  return (
    <section
      className={classNames(
        'relative',
        'min-w-full',
        'min-h-screen',
        'bg-white-dark',
        'px-10',
        'flex',
        'flex-col',
        'justify-between'
      )}
    >
      <div
        id="r1"
        className={classNames(
          'w-full',
          'h-auto',
          'my-2',
          'flex',
          'justify-between'
        )}
      >
        <div className={classNames('flex', 'justify-between', 'items-end')}>
          <h1 className={classNames('hed1', 'text-black')}>Dashboard</h1>
          <p
            className={classNames(
              'xs',
              'pl-4',
              'pb-1',
              'flex',
              'text-black',
              'italic'
            )}
          >
            <div className={classNames('px-1', 'pb-1', 'text-gray-300')}>
              <Icon type="Pencil" color="Gray" size="s" />
            </div>
            Edit Layout
          </p>
        </div>
        <Button>Login</Button>
      </div>
      <div id="r2" className={classNames('w-full', 'my-2')}>
        <AtAGlance classes="w-full" />
      </div>
      <div
        id="r3"
        className={classNames(
          'w-full',
          'flex',
          'flex-row',
          'items-start'
        )}
      >
        <div
          id="r3c1"
          className={classNames(
            'w-2/3',
            'flex',
            'flex-col',
            'justify-between',
            'mr-2'
          )}
        >
          <div id="r3c1r1" className={classNames('w-full')}>
            <TopMarkets />
          </div>
          <div
            id="r3c1r2"
            className={classNames(
              'w-full',
              'flex',
              'flex-row',
              'justify-between',
              'mt-2',
              'items-start'
            )}
          >
            <ValueGap classes="w-1/2 mr-4 mt-4" />
            <TourismConfidence classes="w-1/2 ml-4 mt-4" />
          </div>
        </div>
        <div
          id="r3c2"
          className={classNames(
            'flex-grow',
            'ml-4',
            'mb-4',
            'mr-2',
            'flex',
            'flex-col',
            'justify-between'
          )}
        >
          <WaterAdventures classes="w-full " />
          <FamilySentiment classes="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
