import React from 'react';

import { fetchCategories, fetchCategory } from '@data/category';

export default async function LearningCategory({
  params,
}: {
  params: { slug: string };
}) {
  const category = await fetchCategory(params.slug);

  return (
    <React.Fragment>
      <h1>{category?.name}</h1>
    </React.Fragment>
  );
}

export async function generateStaticParams() {
  const categories = await fetchCategories();
  return categories
    ? categories.map((category) => ({
        title: category.name,
      }))
    : [];
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const category = await fetchCategory(params.slug);

  return {
    title: `${category?.name} | Czech Stack`,
  };
}
