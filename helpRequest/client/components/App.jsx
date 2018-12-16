import React from 'react';
import RequestForm from './RequestForm';
import Header from './Header';
import { phoneValidator, validator} from './validator.jsx';

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
    const { state } = this;
    const phoneNumber = phoneValidator(state.phone);
    console.log(phoneNumber);
    if (!validator(state)) {
      alert('Invalid inputs please try again');
    } else if (!phoneNumber) {
      alert('invalid phone number');
    } else {
      console.log(phoneNumber);
    }
    console.log(state);
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
