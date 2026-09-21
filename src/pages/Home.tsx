import { useEffect } from 'react';
import { Scene } from '@/components/Scene';
import { Hero } from '@/components/home/Hero';
import { BrandStatement } from '@/components/home/BrandStatement';
import { Craving } from '@/components/home/Craving';
import { MenuCarousel } from '@/components/home/MenuCarousel';
import { FeaturedProduct } from '@/components/home/FeaturedProduct';
import { CafeExperience } from '@/components/home/CafeExperience';
import { LocationsScene } from '@/components/home/LocationsScene';
import { SocialGallery } from '@/components/home/SocialGallery';
import { OffersScene } from '@/components/home/OffersScene';
import { FinalCTA } from '@/components/home/FinalCTA';

export function Home() {
  useEffect(() => {
    document.title = 'Caketown Cafe | Cakes, Coffee, Desserts & Good Times';
  }, []);

  return (
    <>
      <Scene z={1}><Hero /></Scene>
      <Scene z={2}><BrandStatement /></Scene>
      <Scene z={3}><Craving /></Scene>
      <Scene z={4}><MenuCarousel /></Scene>
      <Scene z={5}><FeaturedProduct /></Scene>
      <Scene z={6}><CafeExperience /></Scene>
      <Scene z={7}><LocationsScene /></Scene>
      <Scene z={8}><SocialGallery /></Scene>
      <Scene z={9}><OffersScene /></Scene>
      <Scene z={10}><FinalCTA /></Scene>
    </>
  );
}
