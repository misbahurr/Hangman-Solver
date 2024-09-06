
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Page1 from './Pages/page1';
import Page2 from './Pages/page2';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/pages/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
