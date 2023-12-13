import React from 'react';
import Link from 'next/link';

import { fetchCategories, fetchCategory } from '@data/category';
import { fetchTutorials } from '@data/tutorial';

import { formatDateString } from '@utils/date';
import { AppRoute } from '@utils/route';

export default async function LearningCategory({
  params,
}: {
  params: { category: string };
}) {
  const category = await fetchCategory(params.category);
  const tutorials = await fetchTutorials(category?.id || -1);

  return (
    <React.Fragment>
      <h1>{category?.name}</h1>
      <h2>Tutorials</h2>
      {tutorials
        ? tutorials.map((tutorial) => (
            <React.Fragment key={tutorial.id}>
              <h3>{tutorial.name}</h3>
              <p>{tutorial.description}</p>
              <p>Created on: {formatDateString(tutorial.date_created)}</p>
              <p>Author: {tutorial.author.email}</p>
              <Link
                href={`${AppRoute.LEARNING}/${params.category}/${tutorial.slug}`}
              >
                Link
              </Link>
            </React.Fragment>
          ))
        : null}
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
  params: { category: string };
}) {
  const category = await fetchCategory(params.category);

  return {
    title: `${category?.name} | Czech Stack`,
  };
}
