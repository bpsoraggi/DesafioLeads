import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Tabs.css';

function Invited() {
    const [leads, setLeads] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7242/api/Leads')
            .then(response => {
                console.log(response.data);
                setLeads(response.data.filter(lead => lead.status === 0));
            })
            .catch((err) => {
                console.log(err);
            });
    }, [leads]);

    const updateLead = (id, status, price) => {
        let newPrice = price;
        if (status === 1 && price > 500) {
            newPrice = price * 0.9;
        } else {
            newPrice = -1;
        }
        axios.put('https://localhost:7242/api/Leads', { id: id, status: status, discountedPrice: newPrice })
            .then(response => {
                console.log(response.data);
                setLeads(leads.map(lead => lead.id === id ? { ...lead, status: status, price: price } : lead));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const formatDate = (date) => {
        let d = new Date(date);
        const months = ['Janurary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const month = months[d.getMonth()];
        const day = d.getDate();
        let hours = d.getHours();
        const minutes = d.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';

        hours = hours % 12;
        hours = hours ? hours : 12;
        const minutesStr = minutes < 10 ? '0' + minutes : minutes;

        return `${month} ${day} @ ${hours}:${minutesStr} ${ampm}`;
    };

    return (
        <div className="leads-container">
            <div className="leads-list">
                {leads.map(lead => (
                    <div key={lead.id} className="lead-card">
                        <div className="lead-header">
                            <div className="lead-initial">{lead.firstName.charAt(0)}</div>
                            <div>
                                <div className="lead-name">{lead.firstName}</div>
                                <div className="lead-date">{formatDate(lead.dateCreated)}</div>
                            </div>
                        </div>
                        <div className="lead-details">
                            <div className="lead-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#4f4f4f"><path d="M480-80q-106 0-173-33.5T240-200q0-24 14.5-44.5T295-280l63 59q-9 4-19.5 9T322-200q13 16 60 28t98 12q51 0 98.5-12t60.5-28q-7-8-18-13t-21-9l62-60q28 16 43 36.5t15 45.5q0 53-67 86.5T480-80Zm1-220q99-73 149-146.5T680-594q0-102-65-154t-135-52q-70 0-135 52t-65 154q0 67 49 139.5T481-300Zm-1 100Q339-304 269.5-402T200-594q0-71 25.5-124.5T291-808q40-36 90-54t99-18q49 0 99 18t90 54q40 36 65.5 89.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520Zm0-80Z" /></svg>
                                <div>{lead.suburb}</div>
                            </div>
                            <div className="lead-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#4f4f4f"><path d="M168-144q-29.7 0-50.85-21.15Q96-186.3 96-216v-432q0-29.7 21.15-50.85Q138.3-720 168-720h168v-72.21Q336-822 357.18-843q21.17-21 50.91-21h144.17Q582-864 603-842.85q21 21.15 21 50.85v72h168q29.7 0 50.85 21.15Q864-677.7 864-648v432q0 29.7-21.15 50.85Q821.7-144 792-144H168Zm0-72h624v-432H168v432Zm240-504h144v-72H408v72ZM168-216v-432 432Z" /></svg>
                                <div>{lead.category}</div>
                            </div>
                            <div className="lead-job-id">Job ID: {lead.id}</div>
                        </div>
                        <div className="lead-description">{lead.description}</div>
                        <div className="lead-footer">
                            <div className="action-btn">
                                <button className="btn-accept" onClick={() => updateLead(lead.id, 1, lead.price)}>Accept</button>
                                <button className="btn-decline" onClick={() => updateLead(lead.id, 2, lead.price)}>Decline</button>
                            </div>
                            <div className="lead-price"><b>${lead.price.toFixed(2)}</b> Lead Invitation</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Invited;
