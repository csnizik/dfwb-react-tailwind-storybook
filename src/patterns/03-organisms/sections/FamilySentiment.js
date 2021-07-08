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
import PosterOne from '../../01-atoms/images/videoposter01.png';
import PosterTwo from '../../01-atoms/images/videoposter02.png';

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
      <div
        className={classNames(
          'flex',
          'self-start',
          'space-x-3',
          'justify-center',
          'items-center',
          pathName === '/' ? 'visible' : 'invisible'
        )}>
        <Icon size="small" color="Navy Sky" type="Video" />
        <NavLink to="/sentiment">
          <h3 className={classNames('hed-3', 'text-blue-dark')}>
            Family Sentiment
          </h3>
        </NavLink>
      </div>

      <div
        className={classNames(
          'bg-white',
          'rounded-lg',
          'flex',
          'flex-row',
          'pr-4',
          'items-center',
          'space-x-4',
          'shadow',
          'w-96',
          'h-24'
        )}>
        <div
          className={classNames('w-48', 'rounded-l-lg', 'overflow-y-hidden')}>
          <Player
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            poster={PosterOne}
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
        <h3
          className={classNames(
            'hed3',
            'w-48',
            'text-overflow: ellipsis',
            'leading-tight'
          )}>
          Mom Panel Product Test Image is great
        </h3>
      </div>
      <div
        className={classNames(
          'bg-white',
          'rounded-lg',
          'flex',
          'flex-row',
          'pr-4',
          'items-center',
          'space-x-4',
          'shadow',
          'w-96',
          'h-24'
        )}>
        <div
          className={classNames('w-48', 'rounded-l-lg', 'overflow-y-hidden')}>
          <Player
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            poster={PosterTwo}
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
        <h3
          className={classNames(
            'hed3',
            'w-48',
            'text-overflow: ellipsis',
            'leading-tight'
          )}>
          Atlanta Mom Feedback
        </h3>
      </div>
      <div className={classNames('')} id="sentimentExpanded"></div>
    </div>
  );
};

export default FamilySentiment;
