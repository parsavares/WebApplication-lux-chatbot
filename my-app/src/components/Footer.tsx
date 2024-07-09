import React from 'react';
import logo from '../assets/uni.svg'; // Ensure the logo is placed in the src/assets directory

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <img src={logo} alt="University Logo" className="h-8 w-8" />
                <span className="text-lg">Universite de Luxembourg</span>
            </div>
            <div className="flex space-x-4"> 
                <a href="https://github.com/othmane-mahfoud/luxtutor-front" target="_blank" rel="noopener noreferrer" className="hover:underline">HELP</a>
                <a href="https://github.com/othmane-mahfoud/luxtutor-front?tab=readme-ov-file#contact" target="_blank" rel="noopener noreferrer" className="hover:underline">Contact</a>
            </div>
        </footer>
    );
}

export default Footer;
