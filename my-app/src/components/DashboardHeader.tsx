import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/uni.svg'; // Ensure the logo is placed in the src/assets directory

const DashboardHeader: React.FC = () => {
    return (
        <header className="bg-red-500 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <img src={logo} alt="University Logo" className="h-10 w-10" />
                <Link to="/" className="text-2xl font-bold">Home</Link>
            </div>
            <nav className="flex space-x-6">
                <Link to="/project" className="hover:underline">Project</Link>
                <Link to="/contact" className="hover:underline">Contact</Link>
            </nav>
            <div className="flex space-x-4">
                <span>User Level</span>
                <span>User Name</span>
            </div>
        </header>
    );
}

export default DashboardHeader;
