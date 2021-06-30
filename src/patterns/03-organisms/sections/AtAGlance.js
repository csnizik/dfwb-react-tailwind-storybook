import classNames from 'classnames';
import React, { useState } from 'react';
import Metric from '../../02-molecules/blocks/Metric';
import Icon from '../../01-atoms/images/Icon/Icon';

const AtAGlance = ({ pathName, ...props }) => {
  const [cardExpanded, setCardExpanded] = useState(false);

  return (
    <>
      <div
        className={classNames(
          'flex',
          'flex-row',
          'col-span-3',
          'bg-white',
          'grid',
          'grid-cols-3',
          'p-3',
          'rounded-lg',
          'shadow'
        )}>
        <h2 className={classNames('hed2', 'col-span-3')}>At a Glance</h2>
        <div
          className={classNames(
            'col-span-3',
            'grid',
            'grid-cols-3',
            'gap-3',
            'divide-y',
            'lg:divide-y-0',
            'lg:divide-x',
            'divide-gray-300',
            'pb-4'
          )}>
          <div
            className={classNames(
              'col-span-3',
              'lg:col-span-1',
              'flex',
              'lg:flex-col',
              'lg:justify-between',
              '-space-x-2',
              'lg:space-0',
              'items-center'
            )}>
            <Metric value="12.7%" trend="up" />
            <h3 className={classNames('hed3')}>Visa Spend Per Visitor</h3>
          </div>

          <div
            className={classNames(
              'col-span-3',
              'lg:col-span-1',
              'flex',
              'lg:flex-col',
              'lg:justify-between',
              '-space-x-2',
              'lg:space-0',
              'items-center'
            )}>
            <Metric value="12.4%" trend="down" />
            <h3 className={classNames('hed3')}>Visa Consumer Spend</h3>
          </div>

          <div
            className={classNames(
              'col-span-3',
              'lg:col-span-1',
              'flex',
              'lg:flex-col',
              'lg:justify-between',
              '-space-x-2',
              'lg:space-0',
              'items-center'
            )}>
            <Metric value="0.6%" trend="up" />
            <h3 className={classNames('hed3')}>ROAI</h3>
          </div>
        </div>

        <div
          className={classNames(
            'col-span-3',
            'rounded-b-lg',
            'flex',
            'flex-col',
            'flex-grow',
            'justify-end',
            'transform',
            'transition-all',
            'duration-500',
            'ease-in-out',
            '-mx-3',
            '-mb-3',
            cardExpanded ? 'h-40' : 'h-12'
          )}>
          <div
            className={classNames(
              'flex',
              cardExpanded ? 'h-auto' : 'h-0',
              'justify-around',
              'items-center',
              'overflow-hidden'
            )}>
            <div className={classNames('hidden', 'lg:block')}>
              <div className={classNames('my-6', 'text-center')}>
                <p className={classNames('font-bold')}>Goal: $240</p>
                <p>This Season: $240</p>
                <p>Last Season: $213</p>
              </div>
            </div>
            <div className={classNames('hidden', 'lg:block')}>
              <div className={classNames('my-6', 'text-center')}>
                <p className={classNames('font-bold')}>Goal: $552,531,928</p>
                <p>FY 2020: $502,301,753</p>
                <p>FY 2019: $573,692,622</p>
              </div>
            </div>
            <div className={classNames('hidden', 'lg:block')}>
              <div className={classNames('my-6', 'text-center')}>
                <p>2021: 4.8M</p>
                <p>2020: 4.7M</p>
              </div>
            </div>
          </div>

          <div
            className={classNames(
              'bg-teal',
              'rounded-b-lg',
              'h-12',
              'flex',
              'justify-center',
              'py-2'
            )}>
            <button
              className={classNames(
                'cursor-pointer',
                'flex',
                'space-between',
                'items-center'
              )}
              onClick={() => setCardExpanded(!cardExpanded)}>
              Show {cardExpanded ? 'less' : 'more'} information&nbsp;
              <div
                className={classNames(
                  'transform',
                  'transition-all',
                  'duration-200',
                  cardExpanded ? 'rotate-0' : 'rotate-180'
                )}>
                <Icon type="Triangle" size="s" color="black" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AtAGlance;
