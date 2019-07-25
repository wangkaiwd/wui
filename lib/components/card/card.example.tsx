import React from 'react';
import CodeItem from '../../doc/template/codeItem';
import CardExample1 from './card.example.1';

const CardExample = () => {
  return (
    <CodeItem code={require('!!raw-loader!./card.example.1').default}>
      <CardExample1/>
    </CodeItem>
  );
};

export default CardExample;
