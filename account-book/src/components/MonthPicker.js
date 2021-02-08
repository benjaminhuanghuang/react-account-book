import React, { useState } from "react";
import PropTypes from "prop-types";

import { padLeft, range } from "../utility";

function MonthPicker({ year, month }) {
  const [isOpen, setIsOpen] = useState(false);
  const monthRange = range(12, 1);
  const yearRange = range(9, -4).map((number) => number + year);

  const toggleDropdown = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <div className="dropdown month-pricker-component">
      <h4>Select Month</h4>
      <button className="bt btn-lg btn-secondary dropdown-toggle" onClick={(event) => toggleDropdown(event)}>
        {`${year}-${padLeft(month)}`}
      </button>
      {isOpen && (
        <div className="dropdown-menu" style={{ display: "block" }}>
          <div className="row">
            <div className="col border-right">
              {yearRange.map((yearNumber, index) => (
                <a key={index} className="dropdown-item" href="# ">
                  {yearNumber}
                </a>
              ))}
            </div>
            <div className="col">
              <div className="col" border-right>
                {monthRange.map((monthNumber, index) => (
                  <a key={index} className="dropdown-item" href="# ">
                    {padLeft(monthNumber)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MonthPicker;
