import React, { useState } from 'react';
import './Grouping.css';
import { ReactComponent as DisplayIcon } from '../assets/icons_FEtask/Display.svg'; 

const DisplayOptions = ({ onGroupingChange, onSortingChange }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="display-options-wrapper">
      <button className="display-button" onClick={toggleDropdown}>
        <span className="display-icon"><DisplayIcon width="16" height="16" /></span>Display  
        <svg className={`dropdown-icon ${isDropdownVisible ? 'open' : ''}`} width="10" height="10" viewBox="0 0 10 10">
          <path d="M1 3 l4 4 4-4" stroke="black" strokeWidth="1.5" fill="none" />
        </svg> 
      </button>

      {isDropdownVisible && (
        <div className="dropdown-menu">
          <div className="option-group">
            <label className="option-label">Grouping</label>
            <div className="select-wrapper">
              <select className="option-select" onChange={(e) => onGroupingChange(e.target.value)}>
                <option value="status">By Status</option>
                <option value="user">By User</option>
                <option value="priority">By Priority</option>
              </select>
              <svg className="dropdown-icon" width="10" height="10" viewBox="0 0 10 10">
                <path d="M1 3 l4 4 4-4" stroke="black" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
          </div>

          <div className="option-group">
            <label className="option-label">Ordering</label>
            <div className="select-wrapper">
              <select className="option-select" onChange={(e) => onSortingChange(e.target.value)}>
                <option value="priority">By Priority</option>
                <option value="title">By Title</option>
              </select>
              <svg className="dropdown-icon" width="10" height="10" viewBox="0 0 10 10">
                <path d="M1 3 l4 4 4-4" stroke="black" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayOptions;