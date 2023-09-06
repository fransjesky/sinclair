'use client';

import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis root options={{ smoothWheel: true, wheelMultiplier: 2 }}>
      {children}
    </ReactLenis>
  );
}
