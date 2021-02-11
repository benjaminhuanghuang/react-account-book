import React, { useState } from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";

function CategorySelect({ categories, selectedCategory, onSelectCategory }) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(selectedCategory ? selectedCategory.id : null);
  return (
    <div className="categroy-select-component">
      <div className="row">
        {categories.map((category, index) => {
          const activeClassName =
            selectedCategoryId === category.id ? "category-item col-3 active" : "category-item col-3";
          return (
            <div
              className={activeClassName}
              key={index}
              onClick={(event) => {
                event.preventDefault();
                setSelectedCategoryId(category.id);
                onSelectCategory(category);
              }}
            >
              <Ionicon className="rounded-circle" fontSize="50px" color="#555" icon={category.iconName} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategorySelect;
