import React from 'react';
import Navbar from './components/Navbar'; // Changed from named to default import
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection'; // Updated import
import HowItWorksSection from './components/HowItWorksSection'; // Updated import
import CallToActionSection from './components/CallToAction'; // Updated import name
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-700">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection /> 
        <HowItWorksSection />
        <CallToActionSection /> {/* Updated usage */}
      </main>
      <Footer />
    </div>
  );
};

export default App;