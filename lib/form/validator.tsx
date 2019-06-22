import { FormValue } from './form';

interface FormRule {
  key: string,
  required?: boolean,
  minLength?: number,
  maxLength?: number,
  message: string
}
type FormRules = Array<FormRule>
export interface FormError {
  [K: string]: string[]
}

const isEmpty = (value: string) => {
  if (value === undefined || value === null || value === '') {
    return true;
  }
  return false;
};
const addError = (error: undefined | string[], message: string) => {
  if (!error) {
    error = [];
  }
  error.push(message);
};
const validator = (formValue: FormValue, rules: FormRules): FormError => {
  const errors: FormError = {};
  rules.map(rule => {
    const value = formValue[rule.key];
    if (rule.required) {
      if (isEmpty(value)) {
        addError(errors[rule.key], '必填');
      }
    }
    if (rule.minLength) {
      if (formValue[rule.key].length < rule.minLength) {
        addError(errors[rule.key], '太短');
      }
    }
    if (rule.maxLength) {
      if (formValue[rule.key].length > rule.maxLength) {
        addError(errors[rule.key], '太长');
      }
    }
  });
  return errors;
};

export default validator;
