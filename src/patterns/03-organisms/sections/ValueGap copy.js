import React from 'react';
import classNames from 'classnames';
import Card from '../../02-molecules/blocks/Card/Card';
import Chart from 'react-google-charts';

const ValueGap = ({ pathName, classes, ...props }) => {
  return (
    <section className={classNames(classes)}>
      <Card
        width="full"
        iconType="Graph"
        iconColor="NavySky"
        iconSize="small"
        heading="Value Gap"
        subheading="Measures decreased dark green gap"
      >
        <Chart
          width={'300px'}
          height={'300px'}
          chartType="ComboChart"
          loader={<div>Loading Chart</div>}
          data={[
            [
              'Month',
              'Bolivia',
              'Ecuador',
              'Madagascar',
              'Papua New Guinea',
              'Rwanda',
              'Average',
            ],
            ['2004/05', 165, 938, 522, 998, 450, 614.6],
            ['2005/06', 135, 1120, 599, 1268, 288, 682],
            ['2006/07', 157, 1167, 587, 807, 397, 623],
            ['2007/08', 139, 1110, 615, 968, 215, 609.4],
            ['2008/09', 136, 691, 629, 1026, 366, 569.6],
          ]}
          options={{
            title: 'Monthly Coffee Production by Country',
            vAxis: { title: 'Cups' },
            hAxis: { title: 'Month' },
            seriesType: 'bars',
            series: { 5: { type: 'line' } },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </Card>
    </section>
  );
};

export default ValueGap;
