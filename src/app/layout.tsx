import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'amiloris website',
  description: 'my blog',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
