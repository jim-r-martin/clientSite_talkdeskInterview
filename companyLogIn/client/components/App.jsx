import React from 'react';
import Header from './Header';
import CompanyDomainForm from './CompanyDomainForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uiState: 0,
    };
  }

  render() {
    const { uiState } = this.state;
    return (
    <div>
      <Header />
      <CompanyDomainForm />
    </div>
    );
  }
}

export default App;