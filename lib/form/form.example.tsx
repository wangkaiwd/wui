import React, { Fragment, useState } from 'react';
import Form, { FormValue } from './form';

const FormExample: React.FC = (props) => {
  const [formData, setFormData] = useState<FormValue>({ username: 'wangkaiwd', password: '123456' });
  const fields = [
    {
      key: 'username',
      label: '用户名',
      input: { type: 'text' }
    },
    {
      key: 'password',
      label: '密码',
      input: { type: 'text' }
    }
  ];
  const onChange = (newValue: FormValue) => {
    setFormData(newValue);
  };
  const onSubmit = () => {
    console.log('formData', formData);
    // 将表单中输入的内容作为参数传给后端
    // props.history.push('/list'): 跳转到列表页
  };
  return (
    <Form
      formData={formData}
      fields={fields}
      onChange={onChange}
      onSubmit={onSubmit}
      buttons={
        <Fragment>
          <button type="submit">提交</button>
          <button>返回</button>
        </Fragment>
      }
    />
  );
};

export default FormExample;

