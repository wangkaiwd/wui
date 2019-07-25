import React from 'react';
import classes, { classMaker } from '../../helpers/classes';
import './button.scss';
import Icon from '../icon/icon';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'default' | 'primary' | 'danger';
  disabled?: boolean;
  shape?: 'circle' | 'text' | 'outline' | 'contained';
  icon?: string
}

const sc = classMaker('button');
// 要注意： 这里通过泛型<>的形式传入和 为props指定接口：props:Props 有什么区别
const Button: React.FC<Props> = (props) => {
  const { className, color, icon, shape, disabled = false, ...restProps } = props;
  return (
    <button
      className={classes(sc('', color, shape, { disabled }), className)}
      {...restProps}
    >
      {icon && <Icon className={sc('left-icon')} name={icon}/>} {props.children}
    </button>
  );
};
Button.defaultProps = {
  color: 'default',
  // 又碰到了默认值不生效的问题
  disabled: false,
  shape: 'contained'
};
export default Button;
