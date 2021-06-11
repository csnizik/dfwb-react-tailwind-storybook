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
    <section
      className={classNames(
        'relative',
        'min-h-full',
        'min-w-full',
        'bg-white-dark',
        'p-8',
        'flex',
        'flex-col',
        'justify-between',
        'space-y-1'
      )}
    >
      <div
        id="r1"
        className={classNames(
          pathName === '/' ? 'w-full' : 'hidden',
          'h-auto',
          'flex',
          'justify-between'
        )}
      >
        <div className={classNames('flex', 'justify-between', 'items-end')}>
          <h1 className={classNames('hed1', 'text-black')}>
            {pageHeading(pathName)}
          </h1>
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
      <div
        id="r2"
        className={classNames(
          'min-h-0',
          'min-w-0',
          pathName === '/' ? 'w-full' : 'hidden'
        )}
      >
        <AtAGlance classes="w-full" />
      </div>
      <div
        id="r3"
        className={classNames(
          'w-full',
          'flex',
          'flex-row',
          'items-start',
          'space-x-6',
          'justify-between'
        )}
      >
        <div
          id="r3c1"
          className={classNames(
            pathName === '/' ||
              pathName === '/markets' ||
              pathName === '/value' ||
              pathName === '/confidence'
              ? 'w-2/3'
              : 'hidden',
            'flex',
            'flex-col',
            'justify-between',
            'space-y-6'
          )}
        >
          <div
            id="r3c1r1"
            className={classNames(
              pathName === '/' || pathName === '/markets' ? 'w-full' : 'hidden'
            )}
          >
            <TopMarkets />
          </div>
          <div
            id="r3c1r2"
            className={classNames(
              'w-full',
              'flex',
              'flex-row',
              'justify-between',
              'items-start',
              'space-x-6'
            )}
          >
            <ValueGap
              classes={
                pathName === '/' || pathName === '/value' ? 'w-1/2' : 'hidden'
              }
            />
            <TourismConfidence
              classes={
                pathName === '/' || pathName === '/confidence'
                  ? 'w-1/2'
                  : 'hidden'
              }
            />
          </div>
        </div>
        <div
          id="r3c2"
          className={classNames(
            'flex-grow',
            'flex',
            'flex-col',
            'space-y-6',
            'justify-start'
          )}
        >
          <WaterAdventures
            classes={
              pathName === '/' || pathName === '/water' ? 'w-full' : 'hidden'
            }
          />
          <FamilySentiment
            classes={
              pathName === '/' || pathName === '/sentiment'
                ? 'w-full'
                : 'hidden'
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
