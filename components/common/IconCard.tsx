import React from 'react';

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, title, description, className }) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-lg text-center ${className || ''}`}>
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-neutral-darkest mb-2">{title}</h3>
      <p className="text-neutral-dark">{description}</p>
    </div>
  );
};

export default IconCard;