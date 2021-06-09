import React from 'react';
import Sidebar from '../patterns/02-molecules/navigation/Sidebar';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import Icon from '../patterns/01-atoms/images/Icon';
import { Card } from '../patterns/02-molecules/blocks/Card';

const Main = (props) => {
  return (
    <div
      className={classNames(
        'bg-gray-200',
        'overflow-x-hidden',
        'container',
        'flex'
        // 'mx-auto'
      )}
    >
      <Sidebar />
      <div className={classNames('w-4/5')}>
        <div className={classNames('w-full', 'p-5')}>
          <div
            className={classNames(
              'dashboard-heading',
              'flex',
              'w-1/4',
              'items-baseline',
              'justify-between'
            )}
          >
            <h1 className={classNames('hed1', 'text-blue-dark')}>Dashboard</h1>
            <div
              className={classNames(
                'edit-layout',
                'flex',
                'w-24',
                'pl-2',
                'center'
              )}
            >
              <Icon type="Pencil" size="s" color="Gray" />
              <p className={classNames('xs', 'italic', 'text-blue-dark')}>
                Edit layout
              </p>
            </div>
          </div>
        </div>
        <div className={classNames('w-full', 'p-5')}>
          <Card width="full" heading="At a Glance">
            <div className={classNames('glance-content','w-full','flex','justify-evenly')}>
              <div className={classNames('w-1/3')}></div>

              <div className={classNames('w-1/3')}></div>

              <div className={classNames('w-1/3')}></div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Main;
