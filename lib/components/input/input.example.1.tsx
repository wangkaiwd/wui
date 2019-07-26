import React, { Fragment } from 'react';
import Input from './input';

const InputExample1 = () => {
  return (
    <Fragment>
      <Input className={'separate'} placeholder={'search...'}/>
      <Input className={'separate'} placeholder={'search...'} prefix={'qq'}/>
      <Input className={'separate'} placeholder={'search...'} suffix={'alipay'}/>
    </Fragment>
  );
};

export default InputExample1;
