import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";

function CategorySelect({ categories }) {
  return (
    <div className="categroy-select-component">
      <div className="row">
        {categories.map((category, index) => {
          return (
            <div className="category-item" key={index}>
              <Ionicon className="rounded-circle" fontSize="50px" color="#555" icon={category.iconName} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategorySelect;
