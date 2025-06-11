import React from 'react';
import Button from './common/Button';
import prototipoImg from '../images/Prototype.PNG';
import { SECTION_IDS } from '../constants';

const HeroSection: React.FC = () => {
  const PROTOTYPE_LINK = "#prototype-link"; 
  const GOOGLE_FORM_LINK = "#google-form-link";

  return (
    <section 
      id={SECTION_IDS.home}
      className="relative bg-neutral-lightest text-black min-h-[calc(100vh-4rem)] md:min-h-screen flex md:items-center py-20 md:py-28 overflow-hidden" // Navbar is 4rem (h-16)
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-5 md:gap-12 md:items-center">
          {/* Left Column: Text and CTAs */}
          <div className="md:col-span-3 text-center md:text-left animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight mb-6 leading-tight">
              <span className="block text-neutral-darkest">Descubre lo que realmente comes,</span>
              <span className="block text-primary-DEFAULT font-bold">personalizado para ti.</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-neutral-dark max-w-xl mx-auto md:mx-0 mb-10">
              Todo lo que tus productos esconden, ScanEat te lo cuenta.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4" style={{ animationDelay: '0.2s' }}>
              <Button
                variant="secondary"
                size="md"
                className="shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => window.open(PROTOTYPE_LINK, '_blank', 'noopener,noreferrer')}
              >
                Probar el Prototipo
              </Button>
              <Button
                variant="secondary"
                size="md"
                className="shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => window.open(GOOGLE_FORM_LINK, '_blank', 'noopener,noreferrer')}
              >
                Dejar mi Opinión (Formulario)
              </Button>
            </div>
          </div>

          {/* Right Column: iPhone Mockup */}
          <div className="md:col-span-2 mt-16 md:mt-0 flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {/* Container for the iPhone mockup, now without backdrop styling */}
            <div className="relative w-full max-w-[280px] sm:max-w-[300px] mx-auto">
              {/* iPhone 14 Pro Mockup START */}
              {/* Uses custom aspect ratio 'aspect-[9/19.5]' defined in tailwind.config */}
              <div className="relative mx-auto border-neutral-darkest bg-neutral-darkest border-[8px] sm:border-[10px] rounded-[36px] sm:rounded-[44px] w-full aspect-[9/19.5] shadow-2xl">
                {/* Dynamic Island */}
                <div className="absolute top-[16px] sm:top-[20px] left-1/2 -translate-x-1/2 z-20 w-[75px] h-[18px] sm:w-[90px] sm:h-[22px] bg-neutral-darkest rounded-full"></div>
                
                {/* Side Button Indicators */}
                <div className="absolute -right-[9px] sm:-right-[11px] top-[90px] sm:top-[100px] h-[45px] sm:h-[50px] w-0.5 bg-neutral-dark/60 rounded-r-sm"></div> {/* Power */}
                <div className="absolute -left-[9px] sm:-left-[11px] top-[75px] sm:top-[80px] h-[28px] sm:h-[30px] w-0.5 bg-neutral-dark/60 rounded-l-sm"></div> {/* Vol Up */}
                <div className="absolute -left-[9px] sm:-left-[11px] top-[115px] sm:top-[122px] h-[28px] sm:h-[30px] w-0.5 bg-neutral-dark/60 rounded-l-sm"></div> {/* Vol Down */}

                {/* Screen Area */}
                <div className="absolute inset-0 rounded-[28px] sm:rounded-[34px] bg-white flex items-center justify-center overflow-hidden">
                  <img src={prototipoImg} alt="Prototipo" className="object-cover w-full h-full" />

                </div>
              </div>
              {/* iPhone 14 Pro Mockup END */}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements - inspired by the example */}
      {/* Large Blurred Circles */}
      <div aria-hidden="true" className="absolute top-20 -left-10 w-32 h-32 bg-secondary-light rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-bounce"></div>
      <div aria-hidden="true" className="absolute bottom-20 -right-10 w-32 h-32 bg-primary-light rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-bounce animation-delay-2000"></div>
      
      {/* Smaller Distinct Dots - Repositioned */}
      <div aria-hidden="true" className="absolute top-[15%] left-[10%] w-16 h-16 bg-secondary-light rounded-full opacity-60 hidden md:block"></div>
      <div aria-hidden="true" className="absolute bottom-[20%] left-[15%] w-12 h-12 border-[10px] border-secondary rounded-full border-l-transparent border-t-transparent rotate-45 opacity-50 hidden md:block"></div>
      <div aria-hidden="true" className="absolute top-[65%] left-[8%] w-3 h-3 bg-blue-400 rounded-full opacity-70 hidden md:block"></div>
      <div aria-hidden="true" className="absolute top-[25%] right-[10%] w-4 h-4 bg-blue-500 rounded-full opacity-70 hidden md:block"></div>
      <div aria-hidden="true" className="absolute bottom-[10%] right-[8%] w-2 h-2 bg-yellow-300 rounded-full opacity-70 hidden md:block"></div>
    </section>
  );
};

export default HeroSection;