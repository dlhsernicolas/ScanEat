import React, { useState, useEffect } from 'react';
import { APP_NAME, NAV_LINKS, SECTION_IDS } from '../constants';

const ScanEatIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    className={className}
    aria-labelledby="scanEatIconTitle"
    role="img"
  >
    <title id="scanEatIconTitle">ScanEat Logo</title>
    {/* Magnifying Glass Rim */}
    <circle cx="30" cy="28" r="16" fill="none" stroke="#1F2937" strokeWidth="3" />
    {/* Magnifying Glass Handle */}
    <line x1="42" y1="40" x2="54" y2="52" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
    {/* Stylized Leaf inside Magnifying Glass */}
    <path 
      d="M30 32 Q 35 22 40 20 Q 35 28 30 32 M30 32 Q 25 22 20 20 Q 25 28 30 32"
      fill="#19433A" // New primary.DEFAULT (Green)
    />
     <path 
      d="M30,16 C30,13 32,11 34,12 C33,14 31,15 30,16z"
      fill="#19433A" // New primary.DEFAULT (Green)
    />
    <path
      d="M30,16 Q35,22 40,20 Q35,28 30,32 Q25,22 20,20 Q25,28 30,32"
      transform="translate(-2, 2) scale(0.8) rotate(-15 30 26)" // Adjusted position and size
      fill="#19433A" // New primary.DEFAULT (Green)
    />
    <path 
      d="M30 20 C 25 22 22 28 22 32 C 22 36 25 40 30 42 C 35 40 38 36 38 32 C 38 28 35 22 30 20 Z M30 38 C 27 37 25 35 25 32 C 25 29 27 27 30 26 C 33 27 35 29 35 32 C 35 35 33 37 30 38 Z"
      transform="translate(0, -2) scale(0.5) rotate(10 30 30)" // Smaller, slightly different leaf
      fill="#12322A" // New primary.dark
    />
  </svg>
);


const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeOpaque = window.scrollY > 20 || isMobileMenuOpen;
      if (isScrolled !== shouldBeOpaque) {
        setIsScrolled(shouldBeOpaque);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen, isScrolled]);

   useEffect(() => {
    if (isMobileMenuOpen) {
      setIsScrolled(true);
    } else if (window.scrollY <= 20) {
      setIsScrolled(false);
    }
  }, [isMobileMenuOpen]);


  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionHref: string) => {
    e.preventDefault();
    const sectionId = sectionHref.substring(1); // Remove #
    const element = document.getElementById(sectionId); 
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobileMenuOpen) setIsMobileMenuOpen(false); 
  };

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
    isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
  }`;
  
  // logoTextColor is no longer needed for the app name itself, but could be kept for other potential logo elements.
  // For simplicity, we'll directly apply colors to "Scan" and "Eat".
  // const logoTextColor = isScrolled ? 'text-primary-DEFAULT' : 'text-primary-DEFAULT'; 
  
  const linkTextColor = isScrolled 
    ? 'text-neutral-dark hover:text-primary-DEFAULT' 
    : 'text-neutral-dark hover:text-primary-DEFAULT'; 
  
  const mobileIconColor = isScrolled 
    ? 'text-neutral-dark hover:text-primary-DEFAULT' 
    : 'text-neutral-dark hover:text-primary-DEFAULT';


  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href={`#${SECTION_IDS.home}`} onClick={(e) => scrollToSection(e, `#${SECTION_IDS.home}`)} className="flex items-center space-x-2">
            <ScanEatIcon className="w-8 h-8 transition-transform duration-300 transform hover:rotate-[-5deg]" />
            <span 
              className={`text-xl font-bold transition-colors duration-300`} // Removed logoTextColor
            >
              <span className="text-primary-dark">Scan</span>
              <span className="text-secondary-dark">Eat</span>
            </span>
          </a>
          
          <div className="hidden md:flex space-x-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${linkTextColor}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-300 ${mobileIconColor}`}
              aria-label="Abrir menú principal"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg"> {/* Mobile menu always has white background */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-dark hover:text-primary-DEFAULT hover:bg-neutral-light"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;