import React, { Fragment, useState } from 'react';
import Form, { FormValue } from './form';
import validator from './validator';

const FormExample: React.FC = (props) => {
  const [formData, setFormData] = useState<FormValue>({
    email: 'test@qq.com',
    username: 'wangkaiwd',
    password: '123456'
  });
  const [errors, setErrors] = useState({});
  const fields = [
    {
      key: 'email',
      label: '邮箱',
      input: { type: 'text' }
    },
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
    const rules = [
      { key: 'email', required: true, message: '邮箱必填' },
      { key: 'username', required: true, message: '用户名必填' },
      { key: 'username', minLength: 5, maxLength: 10, message: '用户名需要小于10个字并且大于5个字' },
      { key: 'password', required: true, message: '密码必填' }
    ];
    const errors = validator(formData, rules);
    setErrors(errors);
    // 将表单中输入的内容作为参数传给后端
    // props.history.push('/list'): 跳转到列表页
  };
  return (
    <Form
      formData={formData}
      fields={fields}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
      buttons={
        <Fragment>
          <button type="submit">提交</button>
          <button type="reset">重置</button>
          <button>返回</button>
        </Fragment>
      }
    />
  );
};

export default FormExample;

