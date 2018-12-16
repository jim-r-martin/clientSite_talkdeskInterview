import React from 'react';
import RequestForm from './RequestForm';
import Header from './Header';
import { phoneValidator, validator} from './validator.jsx';
import postData from './postData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '+1',
      subject: '',
      description: '',
      callbackAccepted: false,
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
    if (!validator(state)) {
      alert('Invalid inputs please try again');
    } else if (!phoneNumber) {
      alert('invalid phone number');
    } else {
      state.phone = phoneNumber;
      postData(state)
      .then((res) => {
        const { status } = res;
        if (res !== 200) {
          return alert(`Oops! Something went wrong, our apologies. Please try again. Error: ${err}`);
        }
        this.setState({ callbackAccepted: true });
      })
      .catch((err) => {
        alert(`Oops! Something went wrong, our apologies. Please try again. Error: ${err}`);
      });
    }
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
