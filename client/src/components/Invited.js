import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Invited() {
    const [leads, setLeads] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7242/api/Leads')
            .then(response => {
                console.log(response.data);
                setLeads(response.data.filter(lead => lead.status === 0));
            })
            .catch((err) => {
                console.log(err)
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
                console.log(err)
            });
    };

    return (
        <div>
            <h1>Invited Leads</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {leads.map(lead => (
                        <tr key={lead.id}>
                            <td>{lead.firstName}</td>
                            <td>{lead.email}</td>
                            <td>{lead.phoneNumber}</td>
                            <td>
                                <button onClick={() => updateLead(lead.id, 1, lead.price)}>Accept</button>
                                <button onClick={() => updateLead(lead.id, 2, lead.price)}>Decline</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Invited;