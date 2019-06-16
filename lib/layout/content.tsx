import React from 'react';
import classes, { classMaker } from '../helpers/classes';

const sc = classMaker('layout-content');
// 这里的类型为什么是React.HTMLAttributes<HTMLElement>
// HTMLElement => React.ReactElement   这俩者之间有什么区别
interface Props extends React.HTMLAttributes<HTMLElement> {

}
const Content: React.FunctionComponent<Props> = (props) => {
  const { className, ...restProps } = props;
  return (
    <div
      className={classes(sc(), className)}
      {...restProps}
    >
      {props.children}
    </div>
  );
};
export default Content;
