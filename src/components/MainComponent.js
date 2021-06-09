import React from 'react';
import Sidebar from '../patterns/02-molecules/navigation/Sidebar';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import classNames from 'classnames';

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
      <div className={classNames('w-1/5')}>
        <Sidebar />
      </div>
      <div className={classNames('w-4/5')}>
        <div className={classNames('w-full', 'p-5')}>
          <h1 className={classNames('hed1')}>Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
