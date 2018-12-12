import React from 'react';

const FormTitle = (props) => {
  const { uiState } = props;
  const formTitles = {
    0: 'Please fill in the contact information',
    1: 'Call Confirmed. Thanks!',
  };
  const currentTitle = formTitles[uiState];
  return (
    <div className="formTitle">
      {currentTitle}
    </div>
  );
}

export default FormTitle;