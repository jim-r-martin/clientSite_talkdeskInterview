import React from 'react';

const UserLoginForm = () => (
  <div className="userLoginForm">
    <div className="label">
      Email
    </div>
    <input type="text" default="email@company.com" />
    <div className="label">
      Password
    </div>
    <input type="password" default="password" />
    <a className="loginButton" href="/help"><button type="button" >Login</button></a>
  </div>
)

export default UserLoginForm;