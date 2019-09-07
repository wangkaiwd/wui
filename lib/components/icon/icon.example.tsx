import React from 'react';
import CodeItem from '../../doc/template/codeItem';
import IconExample1 from './icon.example.1';

const IconExample: React.FunctionComponent = () => {
  return (
    <div>
      <CodeItem
        title={'Icon图标'}
        code={require('!!raw-loader!./icon.example.1').default}
      >
        <IconExample1/>
      </CodeItem>
    </div>
  );
};
export default IconExample;
