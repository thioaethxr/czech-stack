import React from 'react';
import { redirect } from 'next/navigation';

import { LoginForm } from '@components/blocks/LoginForm';

import { getUserSession } from '@utils/supabase';
import { AppRoute } from '@utils/route';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Czech Stack',
  description: 'Czech Stack',
};

export default async function Login() {
  const { data } = await getUserSession();

  if (data.session) {
    redirect(AppRoute.HOME);
  }

  return (
    <React.Fragment>
      <h1>Login</h1>
      <LoginForm />
    </React.Fragment>
  );
}
