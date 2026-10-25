import { useEffect } from 'react';
import { Hero } from '@/components/home/Hero';
import { Craving } from '@/components/home/Craving';
import { MenuCarousel } from '@/components/home/MenuCarousel';
import { BrandStatement } from '@/components/home/BrandStatement';
import { CafeExperience } from '@/components/home/CafeExperience';
import { LocationsScene } from '@/components/home/LocationsScene';
import { FinalCTA } from '@/components/home/FinalCTA';

export function Home() {
  useEffect(() => {
    document.title = 'Caketown Cafe | Cakes, Coffee, Desserts & Good Times';
  }, []);

  return (
    <>
      <Hero />
      <Craving />
      <BrandStatement />
      <MenuCarousel />
      <CafeExperience />
      <LocationsScene />
      <FinalCTA />
    </>
  );
}