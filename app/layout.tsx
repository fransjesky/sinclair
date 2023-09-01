import type { Metadata } from 'next';
import ThemeRegistry from '@/theme/ThemeRegistry';
import SmoothScroll from '@/hooks/useSmooth';
import { Providers } from '@/redux/providers';
import Navigation from '@/components/Layout/Navigation';
import Footer from '@/components/Layout/Footer';

export const metadata: Metadata = {
  title: 'Frans Jesky — Frontend Developer',
  description:
    'Frans Jesky is a meticulous Frontend Developer with a passion for blending artwork with cutting-edge technology, designing immersive visual aand functional user experiences.',
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
              <Navigation />
              {children}
              <Footer />
            </SmoothScroll>
          </ThemeRegistry>
        </Providers>
      </body>
    </html>
  );
}
