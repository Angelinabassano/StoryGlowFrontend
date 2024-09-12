import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 shadow w-full relative">
      <div className="container mx-auto flex flex-col justify-center">
        <div className="flex space-x-4">
          <a 
            href="https://www.linkedin.com/in/angelina-bassano/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            title="Visit my LinkedIn profile"
            className="text-primary text-lg font-bold py-2 px-4 rounded hover:bg-primary-dark focus:outline-none"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/Angelinabassano" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            title="Visit my GitHub profile"
            className="text-primary text-lg font-bold py-2 px-4 rounded hover:bg-primary-dark focus:outline-none"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
