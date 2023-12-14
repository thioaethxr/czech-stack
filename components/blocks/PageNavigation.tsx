import React from 'react';
import Link from 'next/link';

import { ContentWrapper } from '@components/elements/ContentWrapper';
import { Icon } from '@components/elements/Icon';

import { fetchUserById } from '@data/user';

import { getUserSession } from '@utils/supabase';
import { AppRoute } from '@utils/route';

export const PageNavigation: React.FC = async () => {
  const { data: sessionData } = await getUserSession();
  const isLoggedIn = !!sessionData.session;
  const userInfo = isLoggedIn
    ? await fetchUserById(sessionData.session?.user.id || '')
    : null;

  return (
    <nav>
      <ContentWrapper>
        <h2>Page Navigation</h2>
        <ul>
          <li>
            <Link href={AppRoute.HOME}>Home</Link>
          </li>
          <li>
            <Link href={AppRoute.ABOUT}>About</Link>
          </li>
          <li>
            <Link href={AppRoute.LEARNING}>Learning</Link>
          </li>
          <li>
            <Link href={AppRoute.MATEIRALS}>Materials</Link>
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
                <Icon name="user" />
                <Link
                  href={`${AppRoute.PROFILE}/${userInfo?.display_name || ''}`}
                >
                  {userInfo?.display_name}
                </Link>
              </li>
              <li>
                <form method="POST">
                  <button formAction="/auth/logout">Sign out</button>
                </form>
              </li>
            </React.Fragment>
          )}
        </ul>
      </ContentWrapper>
    </nav>
  );
};
