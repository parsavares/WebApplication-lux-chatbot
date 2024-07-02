import React from 'react';
import logo from '../assets/uni.png'; // Ensure the logo is placed in the src/assets directory

const Header: React.FC = () => {
    return (
        <header className="bg-red-500 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <img src={logo} alt="University Logo" className="h-10 w-10" />
                <span className="text-2xl font-bold">Home</span>
            </div>
            <nav className="flex space-x-6">
                <a href="#" className="hover:underline">Project</a>
                <a href="#" className="hover:underline">Features</a>
                <a href="#" className="hover:underline">Contact</a>
            </nav>
            <div>
                <a href="#" className="hover:underline">Login In</a> |
                <a href="#" className="hover:underline">Register</a>
            </div>
        </header>
    );
}

export default Header;
