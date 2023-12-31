import React from 'react';
import Link from 'next/link';

import { fetchCategories } from '@data/category';

import { regenerateTimes } from '@utils/constants';
import { AppRoute } from '@utils/route';

import type { Metadata } from 'next';

export const revalidate = regenerateTimes.category;

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
              <Link href={`${AppRoute.LEARNING}/${category.slug}`}>Link</Link>
            </React.Fragment>
          ))
        : null}
    </React.Fragment>
  );
}
