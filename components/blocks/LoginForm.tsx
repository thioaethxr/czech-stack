'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import type { FormEvent, ChangeEvent } from 'react';

import type { AuthInfo } from '@typings/auth';

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);

  const handleLogin = async (authInfo: AuthInfo) => {
    try {
      const res = await supabase.auth.signInWithPassword({
        email: authInfo.email,
        password: authInfo.password,
      });
      if (res.error) {
        throw res.error;
      }
      router.refresh();
    } catch (err) {
      console.error(err);
      alert('Login failed!');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setSubmitDisabled(true);
    await handleLogin({ email, password });
    setEmail('');
    setPassword('');
    setSubmitDisabled(false);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <input type="submit" value="Sign in" disabled={submitDisabled} />
    </form>
  );
};
