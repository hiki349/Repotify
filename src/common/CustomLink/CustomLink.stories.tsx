import { BrowserRouter } from 'react-router-dom';

import type { Meta, StoryObj } from '@storybook/react';

import { CustomLinkProps } from '../../../@types/link';

import { CustomLink } from './CustomLink';

const meta: Meta<CustomLinkProps> = {
  title: 'CustomLink',
  component: CustomLink,
  tags: ['autodocs']
};

export default meta;

export const Base: StoryObj<CustomLinkProps> = {
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ],
  args: {
    children: 'Custom Link',
    path: '/'
  }
};
