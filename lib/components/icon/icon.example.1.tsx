import React, { Fragment } from 'react';
import Icon from './icon';
// @ts-ignore
const req = require.context('@/assets/svgs', false, /\.svg/);

interface IconProps {
  id: number;
  name: string;
}

const icons: IconProps[] = [];
req.keys().forEach((key: string, i: number) => {
  const start = key.indexOf('/'), end = key.lastIndexOf('.'), svgName = key.slice(start + 1, end);
  icons.push({ id: i, name: svgName });
});
const IconExample1 = () => {
  return (
    <Fragment>
      {icons.map(icon => (
        <Icon name={icon.name} key={icon.id} style={{ margin: '20px', fontSize: '28px' }}/>
      ))}
    </Fragment>
  );
};

export default IconExample1;
