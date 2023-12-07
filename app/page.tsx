import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Czech Stack',
  description: 'Czech Stack',
};

export default function Home() {
  return (
    <React.Fragment>
      <h1>Home</h1>
    </React.Fragment>
  );
}
