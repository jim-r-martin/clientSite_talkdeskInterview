import React from 'react';
import Header from './Header';
import UserLoginForm from './UserLoginForm';
import photo from '../../public/talkdeskMarketingPhoto.png';

const App = () => (
  <div className="wrapper">
    <div className="loginBody">
      <div className="loginWrapper">
        <Header />
        <UserLoginForm />
      </div>
    </div>
    <div className="marketingPhoto">
    </div>
  </div>
);

export default App;