import React from 'react';
import { Link } from 'react-router-dom';
import robotImage from '../assets/robot.png'; // Ensure the robot image is placed in the src/assets directory

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <main className="p-8 flex-grow">
                <div className="flex justify-between">
                    <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg max-w-lg">
                        <h2 className="text-lg font-bold mb-2">The summary of the user Last progress</h2>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <Link to="#" className="text-blue-500 hover:underline">The learning Path</Link>
                        <Link to="#" className="text-blue-500 hover:underline">My Current Topic Lesson</Link>
                        <Link to="#" className="text-blue-500 hover:underline">User Progress</Link>
                    </div>
                </div>
                <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg max-w-lg mt-8">
                    <h2 className="text-lg font-bold mb-2">Presentation of the curriculum and learning objectives</h2>
                </div>
            </main>
            <div className="flex justify-end items-end p-8">
                <div className="text-center mr-4">
                    <p className="text-blue-500">Let's start Learning</p>
                </div>
                <img src={robotImage} alt="Robot" className="h-24" />
            </div>
        </div>
    );
}

export default Dashboard;
