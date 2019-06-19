import React from 'react';
import classes, { classMaker } from '../helpers/classes';

const sc = classMaker('form');
export interface FormValue {
  [key: string]: string
}

interface FieldsProps {
  key: string,
  label: string,
  input: { type: string }
}

interface Props {
  className?: string,
  formData: FormValue,
  fields: Array<FieldsProps>,
  onChange: (newValue: FormValue) => void,
  onSubmit: () => void,
  buttons: React.ReactFragment
}

const Form: React.FC<Props> = (props) => {
  const {
    className,
    formData,
    fields,
    onChange,
    onSubmit,
    buttons,
    ...resetProps
  } = props;
  // const onChange = (value: string, key: string) => {
  //   const newValue = { ...props.formData, [key]: value };
  //   props.onChange(newValue);
  // };
  const onInputChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = { ...props.formData, [key]: e.target.value };
    props.onChange(newValue);
  };
  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSubmit();
  };
  const onReset = () => {
    const tempFormData: FormValue = {};
    for (const k in props.formData) {
      tempFormData[k] = '';
    }
    props.onChange(tempFormData);
  };
  return (
    <form
      className={classes(sc(), className)}
      onSubmit={onFormSubmit}
      onReset={onReset}
      {...resetProps}
    >
      {fields.map(f => (
        <div key={f.key}>
          {f.label}
          <input
            value={props.formData[f.key]}
            type={f.input.type}
            // onChange={(e) => onChange(e.target.value, f.key)}
            onChange={onInputChange.bind(null, f.key)}
          />
        </div>
      ))}
      <div className={sc('buttons')}>
        {buttons}
      </div>
    </form>
  );
};

export default Form;

