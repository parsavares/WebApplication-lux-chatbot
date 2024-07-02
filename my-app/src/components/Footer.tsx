import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-red-500 text-white p-4 flex justify-between items-center">
            <div className="text-lg">Universite de Luxembourg</div>
            <div className="flex space-x-4">
                <a href="#" className="hover:underline">HELP</a>
                <a href="#" className="hover:underline">Contact</a>
            </div>
        </footer>
    );
}

export default Footer;
