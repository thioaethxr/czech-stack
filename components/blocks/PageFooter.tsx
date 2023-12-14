import React from 'react';

import { ContentWrapper } from '@components/elements/ContentWrapper';
import { Icon } from '@components/elements/Icon';

export const PageFooter: React.FC = () => (
  <footer className="page-footer">
    <div className="page-footer__content">
      <ContentWrapper>
        <div className="page-footer__copyright">
          <span>🇨🇿 Czech Stack &copy; 2023</span>
        </div>
        <a
          className="page-footer__license"
          href="https://www.gnu.org/licenses/gpl-3.0.html"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="scale-balanced" type="fas" />
          <span>Licensováno pod GNU GPLv3</span>
        </a>
        <div className="page-footer__links">
          <a
            href="https://github.com/thioaethxr/czech-stack/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" type="fab" />
            <span>Repozitář</span>
          </a>
          <a href="#">
            <Icon name="link" />
            <span>Odkaz</span>
          </a>
          <a href="#">
            <Icon name="link" />
            <span>Odkaz</span>
          </a>
        </div>
      </ContentWrapper>
    </div>
  </footer>
);
