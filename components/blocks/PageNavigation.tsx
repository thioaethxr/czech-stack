import React from 'react';

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
        <a href={AppRoute.HOME} className="page-navigation__logo" />
        <input type="checkbox" id="nav-toggle" />
        <label className="page-navigation__hider" htmlFor="nav-toggle">
          <Icon name="bars" />
        </label>
        <ul className="page-navigation__items">
          <li className="page-navigation__item">
            <a className="page-navigation__link" href={AppRoute.HOME}>
              Home
            </a>
          </li>
          <li className="page-navigation__item">
            <a className="page-navigation__link" href={AppRoute.ABOUT}>
              About
            </a>
          </li>
          <li className="page-navigation__item">
            <a className="page-navigation__link" href={AppRoute.LEARNING}>
              Learning
            </a>
          </li>
          <li className="page-navigation__item">
            <a className="page-navigation__link" href={AppRoute.MATEIRALS}>
              Materials
            </a>
          </li>
          {!isLoggedIn ? (
            <React.Fragment>
              <li className="page-navigation__item">
                <a className="page-navigation__link" href={AppRoute.LOGIN}>
                  Sign in
                </a>
              </li>
              <li className="page-navigation__item">
                <a className="page-navigation__link" href={AppRoute.REGISTER}>
                  Sign up
                </a>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li className="page-navigation__profile">
                <a
                  className="page-navigation__link"
                  href={`${AppRoute.PROFILE}/${userInfo?.display_name || ''}`}
                >
                  <Icon name="user" />
                  <span>{userInfo?.display_name}</span>
                </a>
              </li>
              <form method="POST" className="page-navigation__auth-form">
                <button formAction="/auth/logout">Sign out</button>
              </form>
            </React.Fragment>
          )}
        </ul>
      </ContentWrapper>
    </nav>
  );
};
