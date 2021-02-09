import React, { useState } from "react";
import PropTypes from "prop-types";

import { padLeft, range } from "../utility";

function MonthPicker({ year, month, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(year);
  const [selectedMonth, setSelectedMonth] = useState(month);

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
                <a
                  key={index}
                  className={yearNumber === selectedYear ? "dropdown-item active" : "dropdown-item"}
                  href="# "
                  onClick={(event) => {
                    event.preventDefault();
                    setSelectedYear(yearNumber);
                  }}
                >
                  {yearNumber}
                </a>
              ))}
            </div>
            <div className="col">
              <div className="col" border-right>
                {monthRange.map((monthNumber, index) => (
                  <a
                    key={index}
                    className={monthNumber === selectedMonth ? "dropdown-item active" : "dropdown-item"}
                    href="# "
                    onClick={(event) => {
                      event.preventDefault();
                      setSelectedMonth(monthNumber);
                      setIsOpen(false);
                      onChange(selectedYear, selectedMonth);
                    }}
                  >
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

MonthPicker.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default MonthPicker;
