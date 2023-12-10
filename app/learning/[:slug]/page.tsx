import React from 'react';

import { fetchCategories } from '@data/category';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Category | Czech Stack',
  description: 'Czech Stack',
};

export default async function LearningCategory({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <React.Fragment>
      <h1>Category</h1>
    </React.Fragment>
  );
}

export async function generateStaticParams() {
  const categories = await fetchCategories();

  return categories.map((category) => ({
    slug: category.slug,
  }));
}
