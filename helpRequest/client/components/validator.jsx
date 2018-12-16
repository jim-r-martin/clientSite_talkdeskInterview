import phoneFormatter from 'phone-formatter';

const validator = (formInfo) => {
  for (var property in formInfo) {
    const value = formInfo[property];
    if (value.length === 0) {
      return false;
    }
  }
  return true;
};

const phoneValidator = (phoneNumber) => {
  const phone = phoneFormatter.normalize(phoneNumber);
  if (phone.length !== 10) {
    return false;
  }
  return phone;
};

export { validator, phoneValidator };
