import React from 'react';

const InputFieldTemplate = (props) => {
  const { label, className, onChange } = props;
  return (
    <div className="requestInput">
      <label>
        {label}
      </label>
      <input type="text" className={className} onChange={onChange}></input>
    </div>
  )
};

export default InputFieldTemplate;
