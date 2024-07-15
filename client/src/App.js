import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Invited from './components/Invited';
import Accepted from './components/Accepted';
import Tabs from "./components/Tabs";
import './App.css';


const App = () => {
    return (
        <Router>
            <div>
                <div className="App">
                    <Tabs />
                </div>
                <nav>
                    <NavLink to="/invited" className="nav-link">Invited</NavLink>
                    <NavLink to="/accepted" className="nav-link">Accepted</NavLink>
                </nav>
                <Routes>
                    <Route path="/invited" element={<Invited />} />
                    <Route path="/accepted" element={<Accepted />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;