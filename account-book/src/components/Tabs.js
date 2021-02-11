import React, { useState } from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";

export const Tabs = ({ children, activeIndex, onTabChange }) => {
  const [activeIdx, setActiveIdx] = useState(activeIndex);

  const tabChange = (event, index) => {
    event.preventDefault();
    setActiveIdx(index);
    onTabChange(index);
  };
  return (
    <ul className="nav nav-tabs nav-fill my-4">
      {React.Children.map(children, (child, index) => {
        const activeClassName = activeIdx === index ? "nav-link active" : "nav-link";
        return (
          <li className={activeClassName}>
            <a href="# " onClick={(event) => tabChange(event, index)}>
              {child}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

Tabs.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export const Tab = ({ children }) => {
  return <>{children}</>;
};
