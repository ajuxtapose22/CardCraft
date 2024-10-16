// src/app/page.js
import Hero from './components/Hero';
import CustomCard from './components/CustomCard';
import FlashCardContainer from './components/FlashCardContainer';

export default function Home() {
  return (
    <main>
      <Hero />
     < CustomCard />
      < FlashCardContainer />
    </main>
  );
}
