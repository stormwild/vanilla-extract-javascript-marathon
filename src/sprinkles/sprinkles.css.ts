import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { vars } from '../themes/theme.css';

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: {
      '@media': '(prefers-color-scheme: dark)',
    },
    lightHover: { selector: '&:hover' },
    darkHover: {
      '@media': '(prefers-color-scheme: dark)',
      selector: '&:hover',
    },
  },
  defaultCondition: ['lightMode', 'darkMode'],
  properties: {
    backgroundColor: vars.colors,
    color: vars.colors,
  },
});

const space = {
  small: 'clamp(0.25rem, .5vw, 0.5rem)',
  medium: 'clamp(0.5rem, 1vw, 1rem)',
  large: 'clamp(1rem, 1.5vw, 1.5rem)',
  xlarge: 'clamp(1.5rem, 2vw, 2rem)',
  xxlarge: 'clamp(2rem, 3vw, 3rem)',
};

const spaceProperties = defineProperties({
  conditions: {
    mobile: {},
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    margin: space,
    padding: space,
    borderRadius: space,
  },
});

export const sprinkles = createSprinkles(colorProperties, spaceProperties);
