'use client';

import Hero from '@/modules/Hero';
import About from '@/modules/About';
import LoadingOverlay from '@/components/Layout/Loading';

// REDUX
import { useAppSelector } from '@/redux/hooks';

export default function Home() {
  const started = useAppSelector((state) => state.global.isStarted);

  return started ? (
    <>
      <Hero />
      <About />
    </>
  ) : (
    <LoadingOverlay />
  );
}
