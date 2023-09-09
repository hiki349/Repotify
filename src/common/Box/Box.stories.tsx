import { Box } from '@common';
import type { Meta, StoryObj } from '@storybook/react';

import { BoxProps } from '../../../@types/box';

const meta: Meta<BoxProps> = {
  title: 'Box',
  component: Box,
  tags: ['autodocs']
};

export default meta;

export const BaseBox: StoryObj<BoxProps> = {
  args: {
    children: 'Box'
  }
};
