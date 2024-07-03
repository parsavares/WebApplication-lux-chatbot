import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Signup from './components/Signup';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;