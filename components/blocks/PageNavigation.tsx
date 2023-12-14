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
    <nav className="page-navigation">
      <ContentWrapper>
        <div className="page-navigation__logo" />
        <ul className="page-navigation__items">
          <li className="page-navigation__item">
            <Link className="page-navigation__link" href={AppRoute.HOME}>
              Home
            </Link>
          </li>
          <li className="page-navigation__item">
            <Link className="page-navigation__link" href={AppRoute.ABOUT}>
              About
            </Link>
          </li>
          <li className="page-navigation__item">
            <Link className="page-navigation__link" href={AppRoute.LEARNING}>
              Learning
            </Link>
          </li>
          <li className="page-navigation__item">
            <Link className="page-navigation__link" href={AppRoute.MATEIRALS}>
              Materials
            </Link>
          </li>
          {!isLoggedIn ? (
            <React.Fragment>
              <li className="page-navigation__item">
                <Link className="page-navigation__link" href={AppRoute.LOGIN}>
                  Sign in
                </Link>
              </li>
              <li className="page-navigation__item">
                <Link
                  className="page-navigation__link"
                  href={AppRoute.REGISTER}
                >
                  Sign up
                </Link>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li className="page-navigation__profile">
                <Icon name="user" />
                <Link
                  className="page-navigation__link"
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
