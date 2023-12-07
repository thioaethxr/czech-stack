import React from 'react';

import { Icon } from '@components/elements/Icon';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Czech Stack',
  description: 'Czech Stack',
};

export default function Home() {
  return (
    <React.Fragment>
      <h1>Home</h1>
      <Icon name="house" />
    </React.Fragment>
  );
}
