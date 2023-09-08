import { Button } from '@common';
import libraryIcon from '@static/icons/library.svg';
import type { Meta, StoryObj } from '@storybook/react';

import { ButtonProps } from '../../../@types/button';

const meta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
  tags: ['autodoc']
};

export default meta;

export const BaseButton: StoryObj<ButtonProps> = {
  args: {
    children: 'Button'
  }
};

export const ImageButton: StoryObj<ButtonProps> = {
  args: {
    startIcon: `${libraryIcon}`
  }
};
