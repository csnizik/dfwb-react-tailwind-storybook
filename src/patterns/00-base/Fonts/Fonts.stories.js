import classNames from 'classnames';
import React from 'react';

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
        'Note: Changing this to "Whitewash White" will also affect the color of the Body text in the preview.',
    },
  },
};

const fontColor = (color) => {
  switch (color) {
    case 'Crystal-Clear Teal':
      return 'text-teal';
    case 'Sunny-Sky Blue':
      return 'text-blue';
    case 'Sunset Pink':
      return 'text-pink';
    case 'Sea Foam Teal':
      return 'text-teal-dark';
    case 'Navy Sky':
      return 'text-blue-dark';
    case 'Moss Green':
      return 'text-green';
    case 'Dusty Rose':
      return 'text-red';
    case 'Whitewash White':
      return 'text-white-dark';
    case 'Black':
      return 'text-black';
    case 'Gray':
      return 'text-gray-500';
    default:
      return '';
  }
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
            'text-xs',
            'tracking-wider',
            `${
              headingColor === 'Whitewash White'
                ? 'text-white-dark'
                : 'text-gray-300'
            }`
          )}
        >
          SUPER (48px; classes: 'text-5xl', 'font-laca', 'font-bold', '{fontColor(headingColor)})'
        </p>
        <h1
          className={classNames(
            'text-5xl',
            'font-serif',
            'font-extrabold',
            fontColor(headingColor)
          )}
        >
          {headingText}
        </h1>
      </div>
      <div className={classNames('row-auto')}>
        <p
          className={classNames(
            'text-xs',
            'tracking-wider',
            `${
              headingColor === 'Whitewash White'
                ? 'text-white-dark'
                : 'text-gray-300'
            }`
          )}
        >
          H1 (36px; classes: 'text-4xl', 'font-laca', 'font-bold', '{fontColor(headingColor)})'
        </p>
        <h1
          className={classNames(
            'text-4xl',
            'font-serif',
            'font-bold',
            fontColor(headingColor)
          )}
        >
          {headingText}
        </h1>
      </div>
      <div className={classNames('row-auto')}>
        <p
          className={classNames(
            'text-xs',
            'tracking-wider',
            `${
              headingColor === 'Whitewash White'
                ? 'text-white-dark'
                : 'text-gray-300'
            }`
          )}
        >
          H2 (24px; classes: 'text-2xl', 'font-serif', 'font-bold', '{fontColor(headingColor)})'
        </p>
        <h2
          className={classNames(
            'text-2xl',
            'font-serif',
            'font-bold',
            fontColor(headingColor)
          )}
        >
          {headingText}
        </h2>
      </div>
      <div className={classNames('row-auto')}>
        <p
          className={classNames(
            'text-xs',
            'tracking-wider',
            `${
              headingColor === 'Whitewash White'
                ? 'text-white-dark'
                : 'text-gray-300'
            }`
          )}
        >
          H3 (18px; classes: 'text-lg', 'font-serif', font-medium', '{fontColor(headingColor)}')
        </p>
        <h3
          className={classNames(
            'text-lg',
            'font-serif',
            'font-medium',
            fontColor(headingColor)
          )}
        >
          {headingText}
        </h3>
      </div>

      <div className={classNames('row-auto')}>
        <p
          className={classNames(
            'text-xs',
            'tracking-wider',
            `${
              headingColor === 'Whitewash White'
                ? 'text-white-dark'
                : 'text-gray-300'
            }`
          )}
        >
          Body (16px; classes: {headingColor==='Whitewash White' ? "'text-white-dark'" : "'text-gray-500'"} )
        </p>
        <p
          className={classNames(
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
