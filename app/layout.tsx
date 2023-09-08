import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import ThemeRegistry from '@/theme/ThemeRegistry';
import { Header, Footer } from '@/components';
import { SmoothScroll } from '@/hooks';
import { Providers } from '@/redux';

export const metadata: Metadata = {
  icons: {
    icon: '/Logo.png',
  },
  title: 'Frans Jesky — Frontend Developer',
  description:
    'Frans Jesky is a meticulous Frontend Developer with a passion for blending artwork with cutting-edge technology, designing immersive visual and functional user experiences.',
  authors: [{ name: 'Frans Jesky', url: 'https://jesky.dev' }],
  creator: 'Frans Jesky',
  publisher: 'Frans Jesky',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Next.js',
    'React',
    'Typescript',
    'Three.js',
    'Porttfolio',
    'Personal Website',
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <ThemeRegistry>
            <SmoothScroll>
              <Header />
              {children}
              <Footer />
            </SmoothScroll>
            <Analytics />
          </ThemeRegistry>
        </Providers>
      </body>
    </html>
  );
}
