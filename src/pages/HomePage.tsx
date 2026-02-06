import HeroSection from '../components/home/HeroSection';
import MusicSection from '../components/home/MusicSection';
import AboutSection from '../components/home/AboutSection';
import CategoriesList from '../components/home/CategoriesList';
import PhoneShowcaseSection from '../components/home/PhoneShowcaseSection';
import PetProjectsSection from '../components/home/PetProjectsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MusicSection />
      <AboutSection />
      <CategoriesList />
      <PhoneShowcaseSection />
      <PetProjectsSection />
    </>
  );
}
