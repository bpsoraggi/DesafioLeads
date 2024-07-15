import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';  // Import the common CSS file

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
    }, []);

    const updateLead = (id, status, price) => {
        let newPrice = price;
        if (price > 500) {
            newPrice = price * 0.9;
        }
        axios.put('https://localhost:7242/api/Leads', { id: id, status: status, price: newPrice })
            .then(response => {
                console.log(response.data);
                setLeads(leads.map(lead => lead.id === id ? { ...lead, status: status, price: newPrice } : lead));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="leads-container">
            <h1>Invited Leads</h1>
            <div className="leads-list">
                {leads.map(lead => (
                    <div key={lead.id} className="lead-card">
                        <div className="lead-header">
                            <div className="lead-initial">{lead.firstName.charAt(0)}</div>
                            <div>
                                <div className="lead-name">{lead.firstName}</div>
                                <div className="lead-date">{new Date(lead.createdDate).toLocaleString()}</div>
                            </div>
                        </div>
                        <div className="lead-details">
                            <div className="lead-location">{lead.suburb}</div>
                            <div className="lead-category">{lead.category}</div>
                            <div className="lead-job-id">Job ID: {lead.id}</div>
                            <div className="lead-contact">
                                <span className="lead-phone">{lead.phoneNumber}</span>
                                <span className="lead-email">{lead.email}</span>
                            </div>
                            <div className="lead-description">{lead.description}</div>
                        </div>
                        <div className="lead-footer">
                            <button className="btn-accept" onClick={() => updateLead(lead.id, 1, lead.price)}>Accept</button>
                            <button className="btn-decline" onClick={() => updateLead(lead.id, 2, lead.price)}>Decline</button>
                            <div className="lead-price">${lead.price.toFixed(2)} Lead Invitation</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Invited;
