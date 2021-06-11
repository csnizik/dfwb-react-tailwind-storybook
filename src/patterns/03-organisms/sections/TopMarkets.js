import classNames from 'classnames';
import React from 'react';
import Card from '../../02-molecules/blocks/Card/Card';
import Chart from '../../02-molecules/blocks/Chart/Chart';

const TopMarkets = ({ pathName, classes, ...props }) => {
  return (
    <section className={classNames(classes)}>
      <Card
        width="full"
        iconType="Network"
        iconColor="Navy Sky"
        iconSize="small"
        heading="Top Markets"
        subheading="Increased arrivals from key markets and increased visitor spend per market"
      >
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="GeoChart"
          data={[
            ['Country', 'Popularity'],
            ['Germany', 200],
            ['United States', 300],
            ['Brazil', 400],
            ['Canada', 500],
            ['France', 600],
            ['RU', 700],
          ]}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey="YOUR_KEY_HERE"
          rootProps={{ 'data-testid': '1' }}
        />
      </Card>
    </section>
  );
};

export default TopMarkets;
