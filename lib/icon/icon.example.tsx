import React from 'react';
import CodeItem from '../codeItem';
import IconExample1 from './icon.example.1';
import IconExample2 from './icon.example.2';

const IconExample: React.FunctionComponent = () => {
  return (
    <div>
      <CodeItem code={require('!!raw-loader!./icon.example.1').default}>
        <IconExample1/>
      </CodeItem>
      <CodeItem code={require('!!raw-loader!./icon.example.2').default}>
        <IconExample2/>
      </CodeItem>
    </div>
  );
};
export default IconExample;
