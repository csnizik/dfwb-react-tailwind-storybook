import classNames from 'classnames';
import React from 'react';
import { fontColor } from '../../../utilities/TextUtils';

export default {
  title: '00-base/Fonts',
  argTypes: {
    headingText: {
      control: {
        type: 'text',
      },
    },
    headingColor: {
      control: {
        type: 'select',
        options: [
          'Crystal-Clear Teal',
          'Sunny-Sky Blue',
          'Sunset Pink',
          'Sea Foam Teal',
          'Navy Sky',
          'Moss Green',
          'Dusty Rose',
          'Whitewash White',
          'Black',
          'Gray',
        ],
      },
      description:
        'Note: When previewing light colors, you may want to change the background color using the "Change the background" button, above the preview.',
    },
  },
};

const Template = ({ headingText, headingColor }) => {
  return (
    <div
      className={classNames(
        'w-full',
        'text-gray-500',
        'grid',
        'flex-col',
        'space-y-7'
      )}
    >
      <div className={classNames('row-auto')}>
        <p
          className={classNames(
            'xs',
            'tracking-widest',
            'font-bold',
            `${
              headingColor === 'Whitewash White'
                ? 'text-white-dark'
                : 'text-red'
            }`
          )}
        >
          SUPER (48px)
        </p>
        <h1 className={classNames('super', fontColor(headingColor))}>
          {headingText}
        </h1>
      </div>
      <div className={classNames('row-auto')}>
        <p
          className={classNames(
            'xs',
            'tracking-widest',
            'font-bold',
            `${
              headingColor === 'Whitewash White'
                ? 'text-white-dark'
                : 'text-red'
            }`
          )}
        >
          H1 (36px)
        </p>
        <h1 className={classNames('hed1', fontColor(headingColor))}>
          {headingText}
        </h1>
      </div>
      <div className={classNames('row-auto')}>
        <p
          className={classNames(
            'xs',
            'tracking-widest',
            'font-bold',
            `${
              headingColor === 'Whitewash White'
                ? 'text-white-dark'
                : 'text-red'
            }`
          )}
        >
          H2 (24px)
        </p>
        <h2 className={classNames('hed2', fontColor(headingColor))}>
          {headingText}
        </h2>
      </div>
      <div className={classNames('row-auto')}>
        <p
          className={classNames(
            'xs',
            'tracking-widest',
            'font-bold',
            `${
              headingColor === 'Whitewash White'
                ? 'text-white-dark'
                : 'text-red'
            }`
          )}
        >
          H3 (18px)
        </p>
        <h3 className={classNames('hed3', fontColor(headingColor))}>
          {headingText}
        </h3>
      </div>

      <div className={classNames('row-auto')}>
        <p
          className={classNames(
            'xs',
            'tracking-widest',
            'font-bold',
            `${
              headingColor === 'Whitewash White'
                ? 'text-white-dark'
                : 'text-red'
            }`
          )}
        >
          Body (16px)
        </p>
        <p
          className={classNames(
            `${
              headingColor === 'Whitewash White'
                ? 'text-white-dark'
                : 'text-navySky'
            }`
          )}
        >
          Laca Text used in body copy. Suspen disse otenti. Inte ger sedit
          efficitur agna, non posuere anterus. Nunc tortir dui, lobortis eget
          eros necumi, mollis temer aspus leo. Cras efficitur potir diam, acesim
          auctor uni dolor semper aliquetese condimentim at nunase. Maecenas
          orcipe ligula, aliqu eu.
        </p>
      </div>

      <div className={classNames('row-auto')}>
        <p
          className={classNames(
            'xs',
            'tracking-widest',
            'font-bold',
            `${
              headingColor === 'Whitewash White'
                ? 'text-white-dark'
                : 'text-red'
            }`
          )}
        >
          Body - sm (14px)
        </p>
        <p
          className={classNames(
            'sm',
            `${
              headingColor === 'Whitewash White'
                ? 'text-white-dark'
                : 'text-gray-500'
            }`
          )}
        >
          This is small body text.
        </p>
      </div>
      <div className={classNames('row-auto')}>
        <p
          className={classNames(
            'xs',
            'tracking-widest',
            'font-bold',
            `${
              headingColor === 'Whitewash White'
                ? 'text-white-dark'
                : 'text-red'
            }`
          )}
        >
          Body - xs (12px)
        </p>
        <p
          className={classNames(
            'xs',
            `${
              headingColor === 'Whitewash White'
                ? 'text-white-dark'
                : 'text-gray-500'
            }`
          )}
        >
          Laca Text used in body copy. Suspen disse otenti. Inte ger sedit
          efficitur agna, non posuere anterus. Nunc tortir dui, lobortis eget
          eros necumi, mollis temer aspus leo. Cras efficitur potir diam, acesim
          auctor uni dolor semper aliquetese condimentim at nunase. Maecenas
          orcipe ligula, aliqu eu.
        </p>
      </div>
    </div>
  );
};

export const Fonts = Template.bind({});
Fonts.args = {
  headingText: 'Destin-Fort Walton Beach',
  headingColor: 'Navy Sky',
};
Fonts.parameters = {
  controls: { expanded: true },
};
