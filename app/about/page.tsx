import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Czech Stack',
  description: 'Czech Stack',
};

export default function About() {
  return (
    <React.Fragment>
      <h1>About</h1>
    </React.Fragment>
  );
}
