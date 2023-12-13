import React from 'react';

import { fetchUsers, fetchUserByUsername } from '@data/user';

export const revalidate = 3600;

export default async function Profile({
  params,
}: {
  params: { name: string };
}) {
  const user = await fetchUserByUsername(params.name);

  return (
    <React.Fragment>
      <h1>{user?.display_name}</h1>
    </React.Fragment>
  );
}

export async function generateStaticParams() {
  const users = await fetchUsers();
  return users
    ? users.map((user) => ({
        name: user.display_name,
      }))
    : [];
}

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}) {
  return {
    title: `${params.name} | Czech Stack`,
  };
}
