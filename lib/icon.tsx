import React from 'react';
import './importAllSvg';

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
