import type { Metadata } from 'next';
import ThemeRegistry from '@/theme/ThemeRegistry';

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
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
