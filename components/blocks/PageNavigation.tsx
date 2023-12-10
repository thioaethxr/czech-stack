import React from 'react';
import Link from 'next/link';

import { getUserSession } from '@utils/supabase';
import { AppRoute } from '@utils/route';

export const PageNavigation: React.FC = async () => {
  const { data } = await getUserSession();
  const isLoggedIn = !!data.session;

  return (
    <nav>
      <h2>Page Navigation</h2>
      <ul>
        <li>
          <Link href={AppRoute.HOME}>Home</Link>
        </li>
        <li>
          <Link href={AppRoute.LEARNING}>Learning</Link>
        </li>
        {!isLoggedIn ? (
          <React.Fragment>
            <li>
              <Link href={AppRoute.LOGIN}>Sign in</Link>
            </li>
            <li>
              <Link href={AppRoute.REGISTER}>Sign up</Link>
            </li>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <li>
              <form method="POST">
                <button formAction="/auth/logout">Sign out</button>
              </form>
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};
