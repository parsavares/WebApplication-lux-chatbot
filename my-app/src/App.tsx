import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import DashboardHeader from './components/DashboardHeader';
import MainContent from './components/MainContent';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <HeaderSwitch />
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

const HeaderSwitch: React.FC = () => {
    const location = useLocation();
    return location.pathname === "/dashboard" ? <DashboardHeader /> : <Header />;
}

export default App;
