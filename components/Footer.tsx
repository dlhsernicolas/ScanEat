import React from 'react';
import { APP_NAME, SECTION_IDS } from '../constants';

// Placeholder SVG icons for social media
const SocialIcon: React.FC<{ path: string, label: string, href?: string }> = ({ path, label, href = "#" }) => (
  <a href={href} className="text-neutral-medium hover:text-primary-light transition-colors" aria-label={label} target="_blank" rel="noopener noreferrer">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} />
    </svg>
    <span className="sr-only">{label}</span>
  </a>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionHref: string) => {
    e.preventDefault();
    const sectionId = sectionHref.substring(1); // Remove #
    const element = document.getElementById(sectionId); 
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-darkest text-neutral-medium">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href={`#${SECTION_IDS.home}`} onClick={(e) => scrollToSection(e, `#${SECTION_IDS.home}`)} className="flex items-center">
               <span className="text-xl font-semibold text-white">{APP_NAME}</span>
            </a>
            <p className="mt-2 text-sm max-w-xs">
              Transformando la manera en que eliges tus alimentos.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-neutral-lightest uppercase">Recursos</h2>
              <ul className="space-y-3">
                <li><a href={`#${SECTION_IDS.howItWorks}`} onClick={(e) => scrollToSection(e, `#${SECTION_IDS.howItWorks}`)} className="hover:text-primary-light transition-colors">Cómo Funciona</a></li>
                <li><a href={`#${SECTION_IDS.features}`} onClick={(e) => scrollToSection(e, `#${SECTION_IDS.features}`)} className="hover:text-primary-light transition-colors">Características</a></li>
                <li><a href={`#${SECTION_IDS.participate}`} onClick={(e) => scrollToSection(e, `#${SECTION_IDS.participate}`)} className="hover:text-primary-light transition-colors">Participa</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-neutral-lightest uppercase">Legal</h2>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-primary-light transition-colors">Política de Privacidad (Próximamente)</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors">Términos y Condiciones (Próximamente)</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-neutral-lightest uppercase">Síguenos (Próximamente)</h2>
              <div className="flex space-x-4 mt-2">
                <SocialIcon label="X" path="M22 3H2v18h20V3zm-5.344 13.688h-1.688l-2.968-4.125-3.125 4.125H7.344L11 11.688 7.625 7.313h1.75l2.75 3.875 2.906-3.875h1.563L13 11.188l3.656 5.5z" />
                <SocialIcon label="Instagram" path="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-1.041c-3.264 0-3.66.014-4.944.076-3.63.166-5.918 2.035-6.175 5.679C.825 8.095.812 8.473.812 12s.013 3.905.075 5.188c.258 3.643 2.545 5.512 6.175 5.679 1.284.062 1.68.075 4.944.075s3.66-.013 4.944-.075c3.63-.167 5.918-2.036 6.175-5.679.062-1.283.075-1.665.075-4.944s-.013-3.66-.075-4.944c-.257-3.643-2.545-5.512-6.175-5.679C15.66.075 15.264 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z" />
                <SocialIcon label="YouTube" path="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.515 3.428 0 5.86 0 12s.515 8.573 3.866 8.816c3.6.245 11.626.246 15.23 0 3.891-.266 3.866-2.378 3.866-8.816s-.5-8.997-3.866-8.816zM9.752 15.36V8.64L15.837 12 9.752 15.36z" />
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-neutral-dark sm:mx-auto lg:my-8" />
        <div className="text-center text-sm">
          &copy; {currentYear} <a href={`#${SECTION_IDS.home}`} onClick={(e) => scrollToSection(e, `#${SECTION_IDS.home}`)} className="hover:underline">{APP_NAME}™</a>. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
