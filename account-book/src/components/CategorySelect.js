import React, { useState } from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";

function CategorySelect({ categories, selectedCategory, onSelectCategory }) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(selectedCategory ? selectedCategory.id : null);
  return (
    <div className="categroy-select-component">
      <div className="row">
        {categories.map((category, index) => {
          const icnoColor = selectedCategoryId === category.id ? "#fff" : "#555";
          const backColor = selectedCategoryId === category.id ? "#347eff" : "#efefef";

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
              <Ionicon
                style={{ backgroundColor: backColor, padding: "5px" }}
                className="rounded-circle"
                fontSize="50px"
                color={icnoColor}
                icon={category.iconName}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategorySelect;
