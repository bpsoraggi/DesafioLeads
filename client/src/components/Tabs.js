import React, { useState } from "react";
import Invited from './Invited';
import Accepted from './Accepted';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("invited");

    const handleInvitedTab = () => {
        setActiveTab("invited");
    };

    const handleAcceptedTab = () => {
        setActiveTab("accepted");
    };

    return (
        <div className="Tabs">
            <ul className="nav">
                <li
                    className={activeTab === "invited" ? "active" : ""}
                    onClick={handleInvitedTab}
                >
                    Invited
                </li>
                <li
                    className={activeTab === "accepted" ? "active" : ""}
                    onClick={handleAcceptedTab}
                >
                    Accepted
                </li>
            </ul>
            <div className="outlet">
                {activeTab === "invited" ? <Invited /> : <Accepted />}
            </div>
        </div>
    );
};
export default Tabs;