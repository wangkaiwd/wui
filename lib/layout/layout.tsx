import React from 'react';
import classes, { classMaker } from '../helpers/classes';
import './layout.scss';
import Sider from './sider';

const sc = classMaker('layout');
interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactElement | Array<React.ReactElement>
}
const Layout: React.FunctionComponent<Props> = (props) => {
  const { className, ...restProps } = props;
  let hasSider = undefined;
  if ((props.children as Array<React.ReactElement>).length > 0) {
    (props.children as Array<React.ReactElement>).map(item => {
      if (item.type === Sider) {
        hasSider = 'hasSider';
      }
    });
  }

  return (
    <div
      className={classes(sc(), className, hasSider)}
      {...restProps}
    >
      {props.children}
    </div>
  );
};
export default Layout;
