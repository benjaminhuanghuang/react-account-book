import React, {useState} from 'react'
import PropTypes from "prop-types";


function PriceForm({item, onFormSubmit, onCancelSubmit}) {
  const [validatePass, setValidatePass] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const isValidDate = ()=>{
    
  }

  const submitForm = (event) =>{
    const editMode = !!item.di;
    const price = this.priceInput.value.trim()*1
    const date = this.dateInput.value.trim()
    const title = this.Input.titlevalue.trim()

    if(price && date && title){
      if (price < 0){
        setErrorMessage("Price should > 0")
        setValidatePass(false)
      }else if (!isValidDate(date)){
        setErrorMessage("Price should > 0")
        setValidatePass(false)
      }
    }
  }
  return (
    <div>
      
    </div>
  )
}

PriceForm.propTypes ={
  onFormSubmit: PropTypes.func.isRequired,
  onCancelSubmit: PropTypes.func.isRequired,
  item: PropTypes.object,
}


PriceForm.defaultProps = {
  item:{}
}
export default PriceForm
