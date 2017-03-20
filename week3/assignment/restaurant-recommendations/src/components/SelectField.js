import React from 'react'

// your code, here
const SelectField = props => {
  let optionElement = props.options.map((choice) =>{
    return (
      <option key={choice.star} value={choice.value}>
        {choice.star}
      </option>
    )
  })
  // debugger;
  return (
    <label>{props.label}
      <select name={props.name} value={props.selectedOption} onChange={props.handleSelected}>
        <option value=''></option>
        {optionElement}
      </select>
    </label>
  );
}
export default SelectField
