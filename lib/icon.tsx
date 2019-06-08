import React from 'react';
import './importAllSvg';
import './icon.scss';

interface IconProps {
  name: string,
  onClick?: React.MouseEventHandler<SVGElement>
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    //这里的onClick是js原生的click方法，点击Icon组件，相当于点击组件的根节点，这里通过原生方法触发自定义方法
    <svg className={'wui-icon'} onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};
export default Icon;
