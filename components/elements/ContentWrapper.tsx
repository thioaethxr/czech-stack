import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const ContentWrapper: React.FC<Props> = ({ children }) => (
  <div className="czs-content-wrapper">{children}</div>
);
