import React, { useState } from 'react';
import './App.css';  // Import the common CSS file
import Tabs from './components/Tabs';
import Leads from './components/Leads';

function App() {
    const [activeTab, setActiveTab] = useState('invited');

    return (
        <div className="App">
            <div className="tabs">
                <button className={activeTab === 'invited' ? 'active' : ''} onClick={() => setActiveTab('invited')}>Invited</button>
                <button className={activeTab === 'accepted' ? 'active' : ''} onClick={() => setActiveTab('accepted')}>Accepted</button>
            </div>
            <div className="content">
                {activeTab === "invited" ? <Leads status={0} /> : <Leads status={1} />}
            </div>
        </div>
    );
}

export default App;
