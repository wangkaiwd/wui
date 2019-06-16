import React from 'react';
import classes, { classMaker } from '../helpers/classes';

const sc = classMaker('footer');
interface Props extends React.HTMLAttributes<HTMLElement> {

}
const Footer: React.FunctionComponent<Props> = (props) => {
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
export default Footer;

