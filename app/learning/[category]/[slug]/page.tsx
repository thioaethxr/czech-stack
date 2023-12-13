import React from 'react';

import { fetchTutorials, fetchTutorial } from '@data/tutorial';

export default async function Tutorial({
  params,
}: {
  params: { slug: string };
}) {
  const tutorial = await fetchTutorial(params.slug || '');

  return (
    <React.Fragment>
      <h1>{tutorial?.name}</h1>
    </React.Fragment>
  );
}

export async function generateStaticParams() {
  const tutorials = await fetchTutorials();
  return tutorials
    ? tutorials.map((tutorial) => ({
        slug: tutorial.slug,
      }))
    : [];
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const tutorial = await fetchTutorial(params.slug);

  return {
    title: `${tutorial?.name} | Czech Stack`,
  };
}
