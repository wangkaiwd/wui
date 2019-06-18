import React from 'react';
import Icon from './icon';


const IconExample: React.FunctionComponent = (props) => {
  return (
    <div>
      <div>
        <Icon name="alipay"/>
      </div>
      <Icon name="qq"/>
    </div>
  );
};
export default IconExample;
