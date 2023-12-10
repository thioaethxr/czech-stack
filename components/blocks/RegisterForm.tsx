'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import type { FormEvent, ChangeEvent } from 'react';

import type { AuthInfo } from '@typings/auth';

export const RegisterForm: React.FC = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);

  const handleRegister = async (authInfo: AuthInfo) => {
    try {
      const res = await supabase.auth.signUp({
        email: authInfo.email,
        password: authInfo.password,
        options: { emailRedirectTo: `${location.origin}/auth/callback` },
      });
      if (res.error) {
        throw res.error;
      }
      router.refresh();
    } catch (err) {
      console.error(err);
      alert('Registration failed!');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setSubmitDisabled(true);
    await handleRegister({ email, password });
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
      <input type="submit" value="Sign up" disabled={submitDisabled} />
    </form>
  );
};
