import React from 'react';
import RequestForm from './RequestForm';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '+1',
      subject: '',
      description: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const { value } = event.target;
    const propertyName = event.target.className;
    this.setState({
      [propertyName]: value,
    });
  }

  onSubmit() {
    console.log(this.state);
  }

  render() {
    return (
    <div className="root">
      <Header />
      <RequestForm onChange={this.onChange} onSubmit={this.onSubmit} />
    </div>
    );
  }
}

export default App;
