import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

function PriceForm({ item, onFormSubmit, onCancelSubmit }) {
  const [validatePass, setValidatePass] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  let priceInput = useRef();
  let dateInput = useRef();
  let titleInput = useRef();

  const isValidDate = () => {};

  const submitForm = (event) => {
    const editMode = !!item.di;
    const price = priceInput.value.trim() * 1;
    const date = dateInput.value.trim();
    const title = titleInput.value.trim();

    if (price && date && title) {
      if (price < 0) {
        setErrorMessage("Price should > 0");
        setValidatePass(false);
      } else if (!isValidDate(date)) {
        setErrorMessage("Date format is not correct");
        setValidatePass(false);
      } else {
        setErrorMessage("");
        setValidatePass(true);

        if (editMode) {
          onFormSubmit({ ...item, title, price, date }, editMode);
        } else {
          onFormSubmit({ title, price, date }, editMode);
        }
      }
    } else {
      setErrorMessage("please input ");
      setValidatePass(false);
    }
    event.preventdefault();
  };

  const { title, price, date } = item;

  return (
    <form onSubmit={submitForm} noValidate>
      <div className="form-group">
        <label htmlFor="title">Title *</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="title..."
          defaultValue={title}
          ref={titleInput}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price *</label>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="price..."
            defaultValue={price}
            ref={priceInput}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="date">Date *</label>
        <input
          type="date"
          className="form-control"
          id="date"
          placeholder="date..."
          defaultValue={date}
          ref={dateInput}
        />
      </div>
      <button type="submit" className="btn btn-primary mr-3"> Submit</button>
      <button className="btn btn-secondary" onClick={onCancelSubmit}></button>
      {
        validatePass && (
          <div className="alert alert-danger mt-5" role="alert">
            {errorMessage}
          </div>
        )
      }
    </form>
  );
}

PriceForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  onCancelSubmit: PropTypes.func.isRequired,
  item: PropTypes.object,
};

PriceForm.defaultProps = {
  item: {},
};
export default PriceForm;
