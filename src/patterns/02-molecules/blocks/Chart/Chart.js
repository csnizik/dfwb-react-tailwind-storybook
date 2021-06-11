import React from 'react';
import GoogleChart from 'react-google-charts';

import './Chart.css';

const Chart = ({
  chartTitle,
  width,
  height,
  isExpanded,
  chartType,
  data,
  options,
  rootProps,
  ...props
}) => {
  return (
    <div>
      <GoogleChart
        width={width}
        height={height}
        chartType={chartType}
        loader="Chart is loading..."
        data={data}
        options={options}
        rootProps={rootProps}
        {...props}
      />
    </div>
  );
};

export default Chart;
