import React from 'react';
import Input from './input';

const InputExample1 = () => {
  return (
    <div>
      <Input className={'input'} placeholder={'search...'}/>
      <Input placeholder={'search...'} prefix={'qq'}/>
      <Input placeholder={'search...'} suffix={'alipay'}/>
    </div>
  );
};

export default InputExample1;
