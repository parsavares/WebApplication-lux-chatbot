import React from 'react';
import luxembourgFlag from '../assets/luxembourgFlag.gif'; // Ensure the GIF file is placed in the src/assets directory

const MainContent: React.FC = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100">
            <img src={luxembourgFlag} alt="Luxembourg Flag"/>
            <h1 className="text-4xl font-bold my-4 text-gray-800">Welcome!</h1>
            <h2 className="text-2xl font-bold my-4 text-gray-800">Luxembourgish Language Learning</h2>
            <button className="bg-blue-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-600 transition transform hover:scale-105">
                Introduction to the Project
            </button>
            <div className="flex justify-center space-x-8 my-8">
                <button className="bg-blue-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-600 transition transform hover:scale-105">Feature 1</button>
                <button className="bg-blue-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-600 transition transform hover:scale-105">Feature 2</button>
                <button className="bg-blue-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-600 transition transform hover:scale-105">Feature 3</button>
            </div>
        </main>
    );
}

export default MainContent;