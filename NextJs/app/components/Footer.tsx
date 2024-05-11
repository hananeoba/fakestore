import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>Copyright &copy; {new Date().getFullYear()} Hanane OULD BABA ALI ♥ </p>
    </footer>
  );
};

export default Footer;