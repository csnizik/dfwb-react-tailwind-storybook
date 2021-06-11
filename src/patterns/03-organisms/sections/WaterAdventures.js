import classNames from 'classnames';
import React from 'react';
import Card from '../../02-molecules/blocks/Card/Card';
import Chart from '../../02-molecules/blocks/Chart/Chart';

const WaterAdventures = ({ pathName, classes, ...props }) => {
  return (
    <section className={classNames(classes)}>
      <Card
        width="full"
        iconType="Pin"
        iconColor="NavySky"
        iconSize="small"
        heading="Water Adventures"
        subheading="Measures an increase in water based, family adventures taken"
      >
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ['Year', 'Sales', 'Expenses', 'Profit'],
            ['2014', 1000, 400, 200],
            ['2015', 1170, 460, 250],
            ['2016', 660, 1120, 300],
            ['2017', 1030, 540, 350],
          ]}
          options={{
            // Material design options
            chart: {
              title: 'Company Performance',
              subtitle: 'Sales, Expenses, and Profit: 2014-2017',
            },
          }}
          // For tests
          rootProps={{ 'data-testid': '2' }}
        />
      </Card>
    </section>
  );
};

export default WaterAdventures;
