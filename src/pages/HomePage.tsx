import HeroSection from '../components/home/HeroSection';
import MusicSection from '../components/home/MusicSection';
import MarqueeStrip from '../components/home/MarqueeStrip';
import AboutSection from '../components/home/AboutSection';
import CategoriesList from '../components/home/CategoriesList';
import TopPromoSection from '../components/home/TopPromoSection';
import PetProjectsSection from '../components/home/PetProjectsSection';
import BottomPromoSection from '../components/home/BottomPromoSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MusicSection />
      <MarqueeStrip />
      <AboutSection />
      <CategoriesList />
      <TopPromoSection />
      <PetProjectsSection />
      <BottomPromoSection />
    </>
  );
}
