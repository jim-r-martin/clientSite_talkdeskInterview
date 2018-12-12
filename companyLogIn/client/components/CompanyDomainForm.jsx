import React from 'react';

const CompanyDomainForm = (props) => {

  return (
    <div className="formContainer">
      <div className="containerContent domainInput">
        <label>
          Your Account Name
        </label>
        <input type="text" className="companyDomain"></input>
        <span className="talkdeskdomain">.mytalkdesk.com</span>
      </div>
      <div className="containerContent domainSignIn">
        Log into your Talkdesk account using your company's subdomain (example: yourcompany.mytalkdesk.com).
        If you don't remember the subdomain send us an email.
        <a href="/login"><button className="domainSubmitButton">Login</button></a>
      </div>
      <div className="containerContent demoRequest">
        Not a Talkdesk customer? Request a demo.
      </div>
    </div>
  );
}

export default CompanyDomainForm;