import React from 'react';

export interface FormValue {
  [key: string]: string
}

interface FieldsProps {
  key: string,
  label: string,
  input: { type: string }
}

interface Props {
  formData: FormValue,
  fields: Array<FieldsProps>,
  onChange: (newValue: FormValue) => void,
  onSubmit: () => void
}

const Form: React.FC<Props> = (props) => {
  // const onChange = (value: string, key: string) => {
  //   const newValue = { ...props.formData, [key]: value };
  //   props.onChange(newValue);
  // };
  const onChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = { ...props.formData, [key]: e.target.value };
    props.onChange(newValue);
  };
  const onSubmit = (e: React.FormEvent) => {
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
    <form onSubmit={onSubmit} onReset={onReset}>
      {props.fields.map(f => (
        <div key={f.key}>
          {f.label}
          <input
            value={props.formData[f.key]}
            type={f.input.type}
            // onChange={(e) => onChange(e.target.value, f.key)}
            onChange={onChange.bind(null, f.key)}
          />
        </div>
      ))}
      <button type="submit">submit</button>
      <button type="reset">reset</button>
    </form>
  );
};

export default Form;

