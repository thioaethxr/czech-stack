import React from 'react';

import { fetchCategories } from '@data/category';

import type { Metadata } from 'next';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Learning | Czech Stack',
  description: 'Czech Stack',
};

export default async function Learning() {
  const categories = await fetchCategories();

  return (
    <React.Fragment>
      <h1>Learning</h1>
      {categories
        ? categories.map((category) => (
            <React.Fragment key={category.id}>
              <h2>{category.name}</h2>
              <button>View</button>
            </React.Fragment>
          ))
        : null}
    </React.Fragment>
  );
}
