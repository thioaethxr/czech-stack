import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Czech Stack",
  description: "Czech Stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
