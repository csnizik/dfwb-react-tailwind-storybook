import classNames from 'classnames';
import React from 'react';
import Icon from '../../01-atoms/images/Icon/Icon';
import {
  Player,
  ControlBar,
  PlayToggle,
  LoadingSpinner,
  BigPlayButton,
  FullscreenToggle,
  VolumeMenuButton,
  VolumeControl,
  VolumeBar,
} from 'video-react';
import { Link, NavLink } from 'react-router-dom';

import 'video-react/dist/video-react.css';

const FamilySentiment = ({ pathName }) => {
  return (
    <div
      className={classNames(
        'flex',
        'flex-col',
        'space-between',
        'space-y-5',
        'col-span-3',
        pathName !== '/sentiment' ? 'lg:col-span-1' : '',
        pathName === '/sentiment' ? 'h-screen' : ''
      )}>
      <div className={classNames('flex', 'space-x-4')}>
        <Icon size="small" color="Navy Sky" type="Video" />
        <h3 className={classNames('hed-3', 'text-blue-dark')}>
          Family Sentiment
        </h3>
      </div>

      <div
        className={classNames(
          'bg-white',
          'rounded-lg',
          'flex',
          'flex-row',
          'items-center',
          'space-x-4',
          'shadow'
        )}>
        <div
          className={classNames('w-48', 'rounded-l-lg', 'overflow-y-hidden')}>
          <Player
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            poster="http://placehold.it/360x220"
            height="220"
            muted>
            <BigPlayButton position="center" />
            <LoadingSpinner />
            <ControlBar
              autoHide={false}
              disableDefaultControls
              className={classNames('flex', 'justify-between')}>
              <PlayToggle />
              <VolumeMenuButton vertical />
              <FullscreenToggle />
            </ControlBar>
          </Player>
        </div>
        <h3 className={classNames('hed3', 'w-48', 'text-overflow: ellipsis')}>
          Mom Panel Product Test Image is great
        </h3>
      </div>
      <div
        className={classNames(
          'bg-white',
          'rounded-lg',
          'flex',
          'flex-row',
          'items-center',
          'space-x-4',
          'shadow'
        )}>
        <div className={classNames('w-48', 'rounded-l-lg', 'overflow-hidden')}>
          <Player
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            poster="http://placehold.it/360x220"
            height="220"
            muted>
            <BigPlayButton position="center" />
            <LoadingSpinner />
            <ControlBar
              autoHide={false}
              disableDefaultControls
              className={classNames('flex', 'justify-between')}>
              <PlayToggle />
              <VolumeMenuButton />
              <FullscreenToggle />
            </ControlBar>
          </Player>
        </div>
        <h3 className={classNames('hed3', 'w-48', 'text-overflow: ellipsis')}>
          Atlanta Mom Feedback
        </h3>
      </div>
      <div className={classNames('')} id="sentimentExpanded"></div>
    </div>
  );
};

export default FamilySentiment;
