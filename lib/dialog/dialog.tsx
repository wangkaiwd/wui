import React, {Fragment} from 'react';
import {classMaker} from '../helpers/classes';
import './dialog.scss';
import Icon from '../icon/icon';

interface DialogProps {
  visible: boolean,
  buttons?: Array<React.ReactElement>,
  onClose: React.MouseEventHandler
}
const scopeClass = classMaker('dialog');
const sc = scopeClass;
const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  const isShowFooter: boolean = (props.buttons && props.buttons.length > 0) ? true : false;
  return props.visible ?
    (
      <Fragment>
        <div className={sc()}>
          <div className={sc('close')} onClick={props.onClose}>
            <Icon className={sc('close-icon')} name="close"/>
          </div>
          <header className={sc('header')}>title</header>
          <main className={sc('content')}>
            {props.children}
          </main>
          {isShowFooter &&
          <footer className={sc('footer')}>
            {props.buttons && props.buttons.map((button, i) =>
              React.cloneElement(button, {key: i})
            )}
          </footer>}
        </div>
        <div className={sc('mask')}></div>
      </Fragment>
    ) : null;
};
export default Dialog;
// 以element元素为样板克隆并返回新的React元素。返回元素的props是将新的props与原始元素的props浅层合并后的结果。
// 新的子元素将取代现有的子元素，而来自原始元素的key和ref将被保留
// React.cloneElement(element,[props],[...children])
