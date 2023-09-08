'use client';

import { Hero, Profile } from '@/modules';
import { LoadingOverlay } from '@/components';

// REDUX
import { useAppSelector } from '@/redux/hooks';

export default function Home() {
  const started = useAppSelector((state) => state.global.isStarted);

  return started ? (
    <>
      <Hero />
      <Profile />
    </>
  ) : (
    <LoadingOverlay />
  );
}
