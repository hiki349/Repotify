import React from 'react';

export interface ButtonImgProps extends React.ButtonHTMLAttributes {
  path: string;
  alt: string;
  className?: string;
}
