// import { validator, phoneValidator } from '../client/components/validator';
const validator = require('../client/components/validator').validator;
const phoneValidator = require('../client/components/validator').phoneValidator;


test('validator fails when there is an empty value', () => {
  const formInfo = {
    phone: '',
    name: 'test',
    description: 'test',
    subject: 'test',
  };
  expect(validator(formInfo)).toBeFalsy();
})
