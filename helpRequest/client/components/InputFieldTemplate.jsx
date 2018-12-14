import React from 'react';

const InputFieldTemplate = (props) => {
  const { label, className } = props;
  return (
    <div className="requestInput">
      <label>
        {label}
      </label>
      <input type="text" className={className}></input>
    </div>
  )
};

export default InputFieldTemplate;
