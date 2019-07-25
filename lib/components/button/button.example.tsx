import React from 'react';
import CodeItem from '../../doc/template/codeItem';
import ButtonExample1 from './button.example.1';
import './button.example.scss';

const ButtonExample: React.FC = () => {
  return (
    <div>
      <CodeItem code={require('!!raw-loader!./button.example.1').default}>
        <ButtonExample1/>
      </CodeItem>
    </div>
  );
};

export default ButtonExample;
