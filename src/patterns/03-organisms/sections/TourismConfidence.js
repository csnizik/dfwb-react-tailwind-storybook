import classNames from 'classnames';
import React from 'react';
import Card from '../../02-molecules/blocks/Card/Card';
import Chart from 'react-google-charts';

const TourismConfidence = ({ pathName, classes, ...props }) => {
  return (
    <section className={classNames(classes)}>
      <Card
        width="full"
        iconType="Pie"
        iconColor="NavySky"
        iconSize="small"
        heading="Tourism Confidence"
        subheading="Measures local sentiment towards tourism"
      >
        <Chart
          width={'300px'}
          height={'300px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7],
          ]}
          options={{
            title: 'My Daily Activities',
            // Just add this option
            pieHole: 0.4,
          }}
          rootProps={{ 'data-testid': '3' }}
        />
      </Card>
    </section>
  );
};

export default TourismConfidence;
