import React from 'react';
import RequestForm from './RequestForm';
import Header from './Header';
import UserLoginForm from './UserLoginForm';


const App = () => (
  <div className="root">
    <Header />
    <RequestForm />
  </div>
  // <div className="wrapper">
  //   <div className="loginBody">
  //     <div className="loginWrapper">
  //       <Header />
  //       <UserLoginForm />
  //     </div>
  //   </div>
  //   <div className="marketingPhoto">
  //   </div>
  // </div>
);

export default App;