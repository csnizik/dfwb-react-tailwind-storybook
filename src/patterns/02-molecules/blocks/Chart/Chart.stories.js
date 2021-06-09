import React from 'react';
import ChartComponent from './Chart';

export default {
  title: '02-molecules/Chart',
  component: ChartComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    chartTitle: {
      table: {
        disable: true,
      },
    },
    width: {
      control: {
        type: 'text',
      },
    },
    height: {
      control: {
        type: 'text',
      },
    },
    isExpanded: {
      control: {
        type: 'boolean',
      },
    },
    chartType: {
      table: {
        disable: true,
      },
    },
    data: {
      table: {
        disable: true,
      },
    },
    options: {
      table: {
        disable: true,
      },
    },
    rootProps: {
      table: {
        disable: true,
      },
    },
    mapsApiKey: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <ChartComponent {...args} />;

export const OriginMarketsChart = Template.bind({});
OriginMarketsChart.parameters = {
  controls: { hideNoControlsWarning: true },
};
OriginMarketsChart.args = {
  chartTitle: 'Origin Markets',
  width: '670px',
  height: '310px',
  isExpanded: false,
  chartType: 'GeoChart',
  data: [
    ['City', 'Total Spend', 'Arrivals'],
    ['Atlanta', 18688021, 102359],
    ['Dallas', 12693514, 53605],
    ['Chicago', 2571710, 9763],
    ['DC', 1860281, 6055],
    ['Nashville', 7455620, 33111],
    ['Detroit', 1539163, 6936],
    ['Minneapolis', 382824, 1717],
    ['Saint Louis', 4794885, 19638],
    ['Indianapolis', 1982138, 7998],
    ['Cincinnati', 3651065, 14541],
  ],
  options: {
    region: 'US',
    displayMode: 'markers',
    colorAxis: { colors: ['#77DBDB', '#48AAED'] },
    resolution: 'provinces',
    enableRegionInteractivity: true,
    magnifyingGlass: {
      enable: true,
      zoomFactor: 12,
    },
  },
  mapsApiKey: 'YOUR_API_KEY_HERE',
};

export const TourismSentimentChart = Template.bind({});
TourismSentimentChart.parameters = {
  controls: { hideNoControlsWarning: true },
};
TourismSentimentChart.args = {
  chartTitle: 'Tourism Sentiment',
  width: '360px',
  height: '340px',
  isExpanded: false,
  chartType: 'PieChart',
  data: [
    ['Tourism Sentiment', 'Percent'],
    ['Against of tourists', 20],
    ['Accepting of tourists', 80],
  ],
  options: {
    pieHole: 0.4,
    pieSliceText: 'Percent',
    pieSliceTextStyle: {
      color: 'black',
    },
    colors: ['#AFE1E2', '#48AAED'],
  },
};

export const ValueGapChart = Template.bind({});
ValueGapChart.parameters = {
  controls: { hideNoControlsWarning: true },
};
ValueGapChart.args = {
  width: '400px',
  height: '340px',
  isExpanded: false,
  chartType: 'ComboChart',
  data: [
    ['Month', 'FY 2019 Revenue', 'FY 2019 Occupancy', 'FY 2020 Occupancy'],
    [new Date(2020, 0), 10, 60, 70],
    [new Date(2020, 1), 8, 50, 60],
    [new Date(2020, 2), 7, 45, 50],
    [new Date(2020, 3), 7.5, 55, 60],
    [new Date(2020, 4), 8, 75, 80],
    [new Date(2020, 5), 11, 60, 84],
    [new Date(2020, 6), 11, 30, 80],
    [new Date(2020, 7), 20, 55, 85],
    [new Date(2020, 8), 30, 80, 90],
    [new Date(2020, 9), 70, 83, 85],
    [new Date(2020, 10), 65, 70, 73],
    [new Date(2020, 11), 50, 72, 65],
  ],
  options: {
    // legend: {
    //     position: 'bottom',
    //     alignment: 'start',

    // },
    legend: {
      position: 'none',
    },
    seriesType: 'bars',
    series: {
      1: { type: 'line' },
      2: { type: 'line' },
    },
    colors: ['#48AAED', '#77DBDB', '#FCB3B1'],
    vAxes: {
      0: {
        title: 'TDT Collections ($ millions)',
        titleTextStyle: { bold: true, italic: false },
        textPosition: 'none',
        minorGridlines: {
          color: '#fff',
        },
      },
    },
    hAxes: {
      0: {
        format: 'MMM',
        gridlines: {
          color: '#fff',
        },
      },
    },
  },
};

export const WaterAdventuresChart = Template.bind({});
WaterAdventuresChart.parameters = {
  controls: { hideNoControlsWarning: true },
};
WaterAdventuresChart.args = {
    width: '240px',
    height: '380px',
    isExpanded: false,
    chartType: 'Bar',
    data: [
        ["Year", "Total Water Adventures"],
        ["2019", 6.94,],
        ["2020", 8.49,],
        ["2021", 10.49,],
  ],
    options: {
        colors: ["#124168", "#48AAED", "#77DBDB"],
        legend: {position: 'none'},
        hAxis: {
            title: 'Year',
            minValue: 2019,
            maxValue: 2021
        },
        vAxis: {
            title: 'Number of Water Adventures',
            minValue: 6,
            maxValue: 12
          },
  },
};
