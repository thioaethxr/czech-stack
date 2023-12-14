import React from 'react';

import type { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export const ContentWrapper: React.FC<Props> = ({ children, ...restProps }) => (
  <div className="czs-content-wrapper" {...restProps}>
    {children}
  </div>
);
