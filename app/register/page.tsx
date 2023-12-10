import React from 'react';
import { redirect } from 'next/navigation';

import { RegisterForm } from '@components/blocks/RegisterForm';

import { getUserSession } from '@utils/supabase';
import { AppRoute } from '@utils/route';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register | Czech Stack',
  description: 'Czech Stack',
};

export default async function Register() {
  const { data } = await getUserSession();

  if (data.session) {
    redirect(AppRoute.HOME);
  }

  return (
    <React.Fragment>
      <h1>Register</h1>
      <RegisterForm />
    </React.Fragment>
  );
}
