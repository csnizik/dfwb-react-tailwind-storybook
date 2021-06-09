import { create } from '@storybook/theming';

import '../src/index.css';

export const brandColors = {
  white: {
    name: 'White',
    value: '#FFFFFFF',
  },
  crystalClearTeal: {
    name: 'Crystal-Clear Teal',
    value: '#AFE1E2',
  },
  sunnySkyBlue: {
    name: 'Sunny-Sky Blue',
    value: '#48AAED',
  },
  sunsetPink: {
    name: 'Sunset Pink',
    value: '#FCB3B1',
  },
  seaFoamTeal: {
    name: 'Sea Foam Teal',
    value: '#77DBDB',
  },
  navySky: {
    name: 'Navy Sky',
    value: '#124168',
  },
  mossGreen: {
    name: 'Moss Green',
    value: '#5F7772',
  },
  dustyRose: {
    name: 'Dusty Rose',
    value: '#9E5F5F',
  },
  whitewashWhite: {
    name: 'Whitewash White',
    value: '#F7FBF9',
  },
  black: {
    name: 'Black',
    value: '#231F20',
  },
};

export default create({
  base: 'light',

  brandTitle: 'Destin Fort Walton Beach',
  brandUrl: 'https://destinfwb.com',
  brandImage:
    'https://www.destinfwb.com/includes/public/assets/placeholders/logo.svg',

  colorPrimary: brandColors.crystalClearTeal.value,
  colorSecondary: brandColors.navySky.value,

  appBg: brandColors.white.value,
  appContentBg: brandColors.white.value,
  appBorderColor: brandColors.seaFoamTeal.value,
  appBorderRadius: 4,

  textColor: brandColors.navySky.value,
  textInverseColor: 'rgba(255,255,255,0.9)',

  barTextColor: brandColors.sunsetPink.value,
  barSelectedColor: brandColors.dustyRose.value,
  barBg: brandColors.whitewashWhite,
});
