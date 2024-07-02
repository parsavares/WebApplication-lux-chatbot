import React from 'react';
import luxembourgFlag from '../assets/luxembourgFlag.jpg'; // Make sure to place the image in src/assets/

const MainContent: React.FC = () => {
  return (
    <main className="text-center p-8">
      <img src={luxembourgFlag} alt="Luxembourg Flag" className="mx-auto" />
      <h1 className="text-2xl font-bold my-4">Introduction to the Project & chatbot</h1>
      <div className="bg-blue-500 text-white p-4 rounded my-4">
        Introduction to the Project & chatbot
      </div>
      <div className="flex justify-center space-x-8 my-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Feature 1</button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Feature 2</button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Feature 3</button>
      </div>
    </main>
  );
}

export default MainContent;
