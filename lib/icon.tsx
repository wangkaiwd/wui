import React from 'react';
import './assets/svgs/wechat.svg';
import './assets/svgs/alipay.svg';
import './assets/svgs/qq.svg';

interface IconProps {
  name: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg>
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};
export default Icon;
