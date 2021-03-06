import React from 'react';
import classes, { classMaker } from '../../helpers/classes';
import './card.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  border?: boolean;
  title?: string;
  hoverable?: boolean;
  extra?: React.ReactNode;
  meta?: string;
}

const sc = classMaker('card');
// React.FunctionComponent是一个接口，需要传入一个类型变量
// 这里的FunctionComponent接口即描述了函数类型，也描述了函数的一些属性类型，如：defaultProps
const Card: React.FunctionComponent<Props> = (props) => {
  const { className, border = true, hoverable = false, extra, meta, title, ...restProps } = props;
  return (
    <div
      className={
        classes(
          sc(
            '',
            { border, hoverable, hasMeta: meta }
          ), className)
      }
      {...restProps}
    >
      {
        title &&
        <header className={sc('header', { extra: extra ? 'extra' : false })}>
          <div className={sc('header-info')}>
            <span>{title}</span>
            <span>{extra}</span>
          </div>
          {
            meta &&
            <div className={sc('header-meta')}>
              {meta}
            </div>
          }
        </header>
      }
      <main className={sc('main', { title: title ? 'title' : false })}>
        {props.children}
      </main>
    </div>
  );
};

export default Card;
Card.defaultProps = {
  border: true,
  hoverable: false,
  extra: ''
};
// 1. 标题  2. 标题右侧的额外内容 3. 鼠标入可以悬浮  4. border
