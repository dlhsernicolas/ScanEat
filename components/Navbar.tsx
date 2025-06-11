import React, { useState, useEffect } from 'react';
import logo from '../images/batata.png';
import { APP_NAME, NAV_LINKS, SECTION_IDS } from '../constants';

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
  <img src={logo} alt="Logo" className="w-10 h-10 transition-transform duration-300 transform hover:rotate-[-5deg]" />
  <span className={`text-xl font-bold transition-colors duration-300`}>
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