import React from 'react';
import classes, { classMaker } from '../../helpers/classes';
import './input.scss';
import Icon from '../icon/icon';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
  suffix?: string;
  error?: string
}

const sc = classMaker('input');
const Input: React.FC<Props> = (props) => {
  const { className, disabled, suffix, prefix, error, onFocus, ...restProps } = props;
  return (
    <div
      className={
        classes(sc('', { disabled }), className)
      }
    >
      <input
        className={sc('area', { 'left-icon': prefix, 'right-icon': suffix })}
        disabled={disabled}
        {...restProps}
      />
      {
        prefix &&
        <div className={sc('prefix')}>
          <Icon name={prefix}/>
        </div>
      }
      {
        suffix &&
        <div className={sc('suffix')}>
          <Icon name={suffix}/>
        </div>
      }
    </div>
  );
};

export default Input;
Input.defaultProps = {
  disabled: false
};

// 1. 标准输入框的样式(禁用)
// 2. 前缀图标
// 3. 后缀图标
// 4. 展示错误信息
