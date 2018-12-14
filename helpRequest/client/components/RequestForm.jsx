import React from 'react';
import InputFieldTemplate from './InputFieldTemplate';
// import PhoneNumberSelect from './PhoneNumberSelect';

const RequestForm = (props) => {

  return (
    <div className="requestForm">
      <div className="formTitle"><h3>Submit a request</h3></div>
      <div className="formContainer">
        {/* <PhoneNumberSelect /> */}
        <InputFieldTemplate label={'PhoneNumber'} className={'phoneNumber'} />
        <InputFieldTemplate label={'Subject'} className={'subject'} />
        <InputFieldTemplate label={'Description'} className={'description'} />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default RequestForm;