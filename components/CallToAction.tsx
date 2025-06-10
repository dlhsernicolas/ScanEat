import React from 'react';
import { APP_NAME, SECTION_IDS } from '../constants';

// Note: The Button component import is removed as it's no longer used here after form removal.

const CallToActionSection: React.FC = () => {
  return (
    <section 
      id={SECTION_IDS.participate} 
      className="bg-gradient-to-br from-primary-dark via-primary-DEFAULT to-primary-light py-16 sm:py-24 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          ¡Prepárate para transformar tu alimentación!
        </h2>
        <p className="text-lg sm:text-xl text-primary-lightest max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {APP_NAME} estará disponible muy pronto. Sé de los primeros en descubrir cómo comer mejor, de forma inteligente.
        </p>
        
        {/* Email form removed */}
        
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}> {/* Adjusted animation delay */}
          <p className="text-sm text-primary-lightest mb-2">Descárgala pronto en:</p>
          <div className="flex justify-center space-x-4">
            <a href="#" aria-label="Próximamente en App Store" className="bg-neutral-darkest text-white py-2 px-5 rounded-lg hover:bg-black transition-colors flex items-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.513 11.318a1.194 1.194 0 00-.729.316 1.027 1.027 0 00-.33.756c0 .944.595 1.398 1.069 1.398.463 0 .955-.383 1.04-.41.037-.012.086-.037.159-.037.211 0 .485.16.67.371.062.074.112.173.112.297 0 .272-.124.63-.446.99-.533.594-1.146.943-1.978.943-.93 0-1.613-.483-2.349-1.19-.693-.668-1.182-1.696-1.182-2.693 0-1.548.992-2.954 2.672-2.954.743 0 1.459.347 1.979.805.074.074.124.173.124.297s-.05.223-.124.297c-.211.21-.485.372-.682.372-.062 0-.124-.025-.16-.037-.087-.025-.582-.41-.992-.41zM12.003 0C6.894 0 4.018 2.515 4.018 6.245c0 1.98.83 3.789 2.386 4.835-1.459 1.238-2.71 3.05-2.71 5.374 0 2.188.904 4.546 2.649 4.546.693 0 1.17-.272 1.905-.854.682-.545 1.081-1.007 1.708-1.007.595 0 1.081.462 1.745 1.007.706.582 1.17.854 1.905.854.768 0 2.648-2.019 2.648-4.546 0-2.324-1.251-4.136-2.722-5.374 1.519-1.02 2.336-2.854 2.336-4.835C19.988 2.515 17.112 0 12.003 0zm-.012 1.523c2.089 0 3.074.955 3.689 2.13.272.532.297 1.275-.05 1.807-.607.904-1.66 1.46-2.918 1.46-1.447 0-2.46-.694-3.183-1.67-.372-.508-.41-.943-.16-1.571.532-1.276 1.625-2.156 2.622-2.156z"/></svg>
              <span>App Store</span>
            </a>
            <a href="#" aria-label="Próximamente en Google Play" className="bg-neutral-darkest text-white py-2 px-5 rounded-lg hover:bg-black transition-colors flex items-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.282 11.475c.002-.195.002-.39.002-.585 0-1.487-.374-2.91-.832-4.388l-6.86 6.86h8.483zm-9.094 10.13c1.422.225 2.896.336 4.416.336 2.594 0 5.034-.698 7.09-1.955V12.06H12.188v9.545zM3.94 5.177C5.741 3.42 8.42 2.367 11.387 2.367c1.934 0 3.78.406 5.449 1.122L4.102 16.223A10.606 10.606 0 012.367 12c0-2.31.737-4.427 1.573-6.823zM4.132 17.025l12.066-12.07A10.633 10.633 0 0119.633 12c0 .39-.015.775-.044 1.155L4.133 17.025z"/></svg>
              <span>Google Play</span>
            </a>
          </div>
           <p className="mt-4 text-xs text-primary-lightest">(Próximamente)</p>
        </div>

      </div>
    </section>
  );
};

export default CallToActionSection;