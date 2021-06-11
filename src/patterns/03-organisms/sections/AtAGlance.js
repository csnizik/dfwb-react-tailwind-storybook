import classNames from 'classnames';
import React from 'react';
import GridCard from '../../02-molecules/blocks/Card/GridCard';
import Metric from '../../02-molecules/blocks/Metric';

const AtAGlance = ({ pathName, classes, ...props }) => {
  return (
    <section className={classNames(classes)}>
      <GridCard ctaText="Show More Information">
        <h2 className={classNames('hed2')}>At a Glance</h2>
        <div
          className={classNames(
            'flex',
            'flex-row',
            'justify-around',
            'w-full',
            'divide-x',
            'divide-gray-300',
            'divide-solid'
          )}
        >
          <div
            className={classNames(
              'w-1/3',
              'flex',
              'flex-col',
              'justify-between',
              'items-center'
            )}
          >
            <Metric value="12.7%" trend="up" />
            <h3 className={classNames('hed3')}>Visa Spend Per Visitor</h3>
          </div>
          <div
            className={classNames(
              'w-1/3',
              'flex',
              'flex-col',
              'justify-between',
              'items-center'
            )}
          >
            <Metric value="12.4%" trend="down" />
            <h3 className={classNames('hed3')}>Visa Consumer Spend</h3>
          </div>
          <div
            className={classNames(
              'w-1/3',
              'flex',
              'flex-col',
              'justify-between',
              'items-center'
            )}
          >
            <Metric value="0.6%" trend="up" />
            <h3 className={classNames('hed3')}>ROAI</h3>
          </div>
        </div>
      </GridCard>
    </section>
  );
};

export default AtAGlance;
