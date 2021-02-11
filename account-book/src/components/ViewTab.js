import React from "react";
import PropTypes from "prop-types";

import Ionicon from "react-ionicons";
import { LIST_VIEW, CHART_VIEW } from "../utility";

const ViewTab = ({ activeTab, onTabChange }) => {
  const generateLinkClass = (current, view) => {
    return current === view ? "nav-link active" : "nav-link";
  };
  return (
    <ul className="nav nav-tabs nav-fill my-4">
      <li className="nav-item">
        <a
          className={generateLinkClass(activeTab, LIST_VIEW)}
          href="# "
          onClick={(event) => {
            event.preventDefault();
            onTabChange(LIST_VIEW);
          }}
        >
          <Ionicon className="rounded-circle mr-2" fontSize="25px" color="#007bff" icon="ios-paper" />
          List
        </a>
      </li>
      <li className="nav-item">
        <a
          className={generateLinkClass(activeTab, CHART_VIEW)}
          href="# "
          onClick={(event) => {
            event.preventDefault();
            onTabChange(CHART_VIEW);
          }}
        >
          <Ionicon className="rounded-circle" fontSize="25px" color="#007bff" icon="ios-pie" />
          Chart
        </a>
      </li>
    </ul>
  );
};

ViewTab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

ViewTab.defaultProps = {};


export default ViewTab;



/*  Sample  code

<ViewTab
  activeTab={tabView}
  onTabChange={(view) => {
    setTabView(view);
  }}
/>
*/