import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 | Czech Stack',
  description: 'Czech Stack',
};

export default function NotFound() {
  return (
    <React.Fragment>
      <h1>Error 404</h1>
      <p>Page not found.</p>
    </React.Fragment>
  );
}
