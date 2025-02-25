import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 py-12 px-4">
      <div className="max-w-7xl w-full mx-auto text-center space-y-6">
        <p className="text-lg sm:text-xl text-white max-w-4xl mx-auto">
          *Disclaimer: results are not guaranteed, may not be permanent, and can vary per individual. Some images are of models, not actual patients.
        </p>
        
        <p className="text-lg sm:text-xl text-white">
          © 2001 - 2025 Fairfax Family Dental Care | Forever Website® 2.0 | Designed & Developed by Einstein Dental
        </p>

        <p className="text-lg sm:text-xl text-blue-400 space-x-4">
          {["Sitemap", "Privacy Policy", "Login"].map((item, index) => (
            <span key={index} className="hover:text-white transition cursor-pointer">
              {item}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
