import React from 'react';
import CodeItem from '../../doc/template/codeItem';
import ButtonExample1 from './button.example.1';
import './button.example.scss';
import ButtonExample3 from '@/components/button/button.example.3';
import ButtonExample2 from '@/components/button/button.example.2';

const ButtonExample: React.FC = () => {
  return (
    <div>
      <CodeItem
        title={'基础使用'}
        code={require('!!raw-loader!./button.example.1').default}
      >
        <ButtonExample1/>
      </CodeItem>
      <CodeItem
        title={'添加图标'}
        code={require('!!raw-loader!./button.example.2').default}
      >
        <ButtonExample2/>
      </CodeItem>
      <CodeItem
        title={'外边框'}
        code={require('!!raw-loader!./button.example.3').default}
      >
        <ButtonExample3/>
      </CodeItem>
    </div>
  );
};

export default ButtonExample;
