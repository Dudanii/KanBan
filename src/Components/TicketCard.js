// src/components/TicketCard.js
import React from 'react';
import './TicketCard.css';

// Importing icons
import todoIcon from '../assets/icons_FEtask/To-do.svg';
import inProgressIcon from '../assets/icons_FEtask/in-progress.svg';
import backlogIcon from '../assets/icons_FEtask/Backlog.svg'; 
import doneIcon from '../assets/icons_FEtask/Done.svg'; 
import cancelledIcon from '../assets/icons_FEtask/Cancelled.svg'

// Define the icons for different statuses
const getStatusIcon = (status) => {
  switch (status.toLowerCase()) {
    case 'cancelled':
      return cancelledIcon
    case 'todo':
      return todoIcon;
    case 'in progress':
    case 'inprogress':
      return inProgressIcon;
    case 'done':
      return doneIcon;
    case 'backlog': // Added backlog case
      return backlogIcon; // Ensure this matches your import
    default:
      console.warn(`No icon found for status: ${status}`); // Debug log
      return null;
  }
};


const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-id">{ticket.id} </div>
      {/* <h3 className="ticket-title">{ticket.title}</h3> */}
      <div className="ticket-details">
        <div className="ticket-status">
          <img src={getStatusIcon(ticket.status)} alt={ticket.status} className="status-icon" /><h3 className="ticket-title">{ticket.title}</h3>
        </div>
      </div>
      <div className="ticket-user">{ticket.user}</div>
    </div>
  );
};

export default TicketCard;