import React from 'react';
import CodeItem from '../../doc/template/codeItem';
import InputExample1 from './input.example.1';

const InputExample = () => {
  return (
    <CodeItem code={require('!!raw-loader!./input.example.1').default}>
      <InputExample1/>
    </CodeItem>
  );
};

export default InputExample;
