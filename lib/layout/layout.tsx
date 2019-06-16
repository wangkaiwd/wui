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
  const childrenAssert = props.children as Array<React.ReactElement>;
  const hasSider = childrenAssert.length > 0 &&
    childrenAssert.some(child => child.type === Sider);

  return (
    <div
      className={classes(sc('', { hasSider }), className)}
      {...restProps}
    >
      {props.children}
    </div>
  );
};
export default Layout;
