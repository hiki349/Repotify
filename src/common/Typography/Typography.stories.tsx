import type { Meta, StoryObj } from '@storybook/react';

import { Typography, TypographyProps } from './Typography';

const meta: Meta<TypographyProps> = {
  title: 'Typography',
  component: Typography,
  tags: ['autodocs']
};

export default meta;

export const Base: StoryObj<TypographyProps> = {
  args: {
    children: 'Typography'
  }
};
