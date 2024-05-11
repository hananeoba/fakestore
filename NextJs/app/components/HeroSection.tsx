import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-secondary text-white py-20 px-4 md:px-10 rounded mb-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Shop</h1>
          <p className="text-lg md:text-xl">Discover amazing deals on your favorite products.</p>
        </div>
        <div className="md:w-1/2">
          <img src="/image1.png" alt="hero" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;