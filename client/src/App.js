import React, { useState } from 'react';
import Invited from './components/Invited';
import Accepted from './components/Accepted';
import './App.css';  // Import the common CSS file

function App() {
    const [activeTab, setActiveTab] = useState('invited');

    return (
        <div className="App">
            <div className="tabs">
                <button className={activeTab === 'invited' ? 'active' : ''} onClick={() => setActiveTab('invited')}>Invited</button>
                <button className={activeTab === 'accepted' ? 'active' : ''} onClick={() => setActiveTab('accepted')}>Accepted</button>
            </div>
            <div className="content">
                {activeTab === 'invited' && <Invited />}
                {activeTab === 'accepted' && <Accepted />}
            </div>
        </div>
    );
}

export default App;
