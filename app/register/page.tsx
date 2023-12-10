'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import type { FormEvent, ChangeEvent } from 'react';

export default function Register() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);
  const router = useRouter();

  const supabase = createClientComponentClient();

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitDisabled(true);
    await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${location.origin}/auth/callback` },
    });
    setEmail('');
    setPassword('');
    setSubmitDisabled(false);
    router.refresh();
  };

  return (
    <React.Fragment>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          required
        />
        <br />
        <br />
        <input type="submit" value="Sign up" disabled={submitDisabled} />
      </form>
    </React.Fragment>
  );
}
