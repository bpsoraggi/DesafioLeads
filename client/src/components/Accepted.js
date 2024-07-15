import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Accepted() {
    const [leads, setLeads] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7242/api/Leads')
            .then(response => {
                console.log(response.data);
                setLeads(response.data.filter(lead => lead.status === 1));
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    return (
        <div>
            <h1>Accepted Leads</h1>
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Date Created</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {leads.map(lead => (
                        <tr key={lead.id}>
                            <td>{lead.fullName}</td>
                            <td>{lead.dateCreated}</td>
                            <td>{lead.email}</td>
                            <td>{lead.phoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Accepted;