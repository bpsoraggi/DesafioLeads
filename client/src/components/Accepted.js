import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Tabs.css';  // Import the common CSS file

function Accepted() {
    const [leads, setLeads] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7242/api/Leads')
            .then(response => {
                console.log(response.data);
                setLeads(response.data.filter(lead => lead.status === 1));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const formatDate = (date) => {
        let d = new Date(date);
        const months = ['Janurary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const month = months[d.getMonth()];
        const day = d.getDate();
        const year = d.getFullYear();
        let hours = d.getHours();
        const minutes = d.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';

        hours = hours % 12;
        hours = hours ? hours : 12;
        const minutesStr = minutes < 10 ? '0' + minutes : minutes;

        return `${month} ${day} ${year} @ ${hours}:${minutesStr} ${ampm}`;
    };

    return (
        <div className="leads-container">
            <div className="leads-list">
                {leads.map(lead => (
                    <div key={lead.id} className="lead-card">
                        <div className="lead-header">
                            <div className="lead-initial">{lead.firstName.charAt(0)}</div>
                            <div>
                                <div className="lead-name">{lead.fullName}</div>
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
                            <div className="lead-price">${lead.discountedPrice !== null ? lead.discountedPrice.toFixed(2) : lead.price.toFixed(2)} Lead Invitation</div>
                        </div>
                        <div className="lead-contact">
                            <div className="lead-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#4f4f4f"><path d="M763-145q-121-9-229.5-59.5T339-341q-86-86-135.5-194T144-764q-2-21 12.29-36.5Q170.57-816 192-816h136q17 0 29.5 10.5T374-779l24 106q2 13-1.5 25T385-628l-97 98q20 38 46 73t57.97 65.98Q422-361 456-335.5q34 25.5 72 45.5l99-96q8-8 20-11.5t25-1.5l107 23q17 5 27 17.5t10 29.5v136q0 21.43-16 35.71Q784-143 763-145ZM255-600l70-70-17.16-74H218q5 38 14 73.5t23 70.5Zm344 344q35.1 14.24 71.55 22.62Q707-225 744-220v-90l-75-16-70 70ZM255-600Zm344 344Z" /></svg>
                                <div>{lead.phoneNumber}</div>
                            </div>
                            <div className="lead-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#4f4f4f"><path d="M168-192q-29.7 0-50.85-21.16Q96-234.32 96-264.04v-432.24Q96-726 117.15-747T168-768h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192H168Zm312-240L168-611v347h624v-347L480-432Zm0-85 312-179H168l312 179Zm-312-94v-85 432-347Z" /></svg>
                                <div>{lead.email}</div>
                            </div>
                        </div>
                        <div className="lead-description">{lead.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Accepted;
