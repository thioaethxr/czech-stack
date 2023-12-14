import React from 'react';
import Markdown from 'react-markdown';

import { fetchTutorials, fetchTutorialBySlug } from '@data/tutorial';

import { regenerateTimes } from '@utils/constants';

export const revalidate = regenerateTimes.tutorial;
export const dynamic = 'force-dynamic';

export default async function Tutorial({
  params,
}: {
  params: { slug: string };
}) {
  const tutorial = await fetchTutorialBySlug(params.slug || '');

  return (
    <React.Fragment>
      <h1>{tutorial?.name}</h1>
      <Markdown>{tutorial?.content}</Markdown>
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
  const tutorial = await fetchTutorialBySlug(params.slug);

  return {
    title: `${tutorial?.name} | Czech Stack`,
  };
}
