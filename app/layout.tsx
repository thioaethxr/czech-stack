import { PageNavigation } from '@components/blocks/PageNavigation';
import { PageFooter } from '@components/blocks/PageFooter';

import type { Metadata } from 'next';

import '@styles/reset.scss';
import '@styles/breakpoint.scss';
import '@styles/main.scss';

export const metadata: Metadata = {
  title: 'Czech Stack',
  description: 'Czech Stack',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>
        <PageNavigation />
        {children}
        <PageFooter />
      </body>
    </html>
  );
}
