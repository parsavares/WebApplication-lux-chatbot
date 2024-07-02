import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-red-500 text-white p-4 flex justify-between items-center">
            <div className="text-xl font-bold">Home</div>
            <nav className="flex space-x-4">
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
