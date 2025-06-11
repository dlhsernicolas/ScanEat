import React from 'react';
import Button from './common/Button';
import { SECTION_IDS } from '../constants';

const HeroSection: React.FC = () => {
  const scrollToParticipate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById(SECTION_IDS.participate);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id={SECTION_IDS.home}
      className="relative bg-neutral-light text-black min-h-[80vh] flex items-center justify-center pt-16"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="text-black">Descubre lo que </span>
          <span className="text-secondary-dark">realmente comes</span>,
          <br className="hidden sm:inline" />
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-black max-w-3xl mx-auto mb-10">
          Todo lo que tus productos esconden, ScanEat te lo cuenta.
        </p>
        <Button 
          onClick={scrollToParticipate}
          size="lg"
          variant="secondary"
          className="shadow-xl hover:shadow-2xl transform hover:scale-105"
        >
          Probar el prototipo
        </Button>
         <Button 
          onClick={scrollToParticipate}
          size="lg"
          variant="secondary"
          className="shadow-xl hover:shadow-2xl transform hover:scale-105"
        >
          Dejar mi opinión (Formulario)
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
