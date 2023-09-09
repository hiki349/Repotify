import { Card } from '@common';
import song from '@static/images/song.jpg';
import type { Meta, StoryObj } from '@storybook/react';

import { CardProps } from '../../../@types/card';

const meta: Meta<CardProps> = {
  title: 'Card',
  component: Card,
  tags: ['autodocs']
};

export default meta;

export const BaseCard: StoryObj<CardProps> = {
  args: {
    image: `${song}`,
    title: 'Title',
    description: 'Description'
  }
};
