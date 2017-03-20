import React from 'react'

// your code, here
const ReviewForm = props => {
  return (
    <label>{props.label}
      <input
        type='text'
        name={props.name}
        value={props.content}
        onChange={props.handlerFunction}
      />
    </label>
  );
}
export default ReviewForm
