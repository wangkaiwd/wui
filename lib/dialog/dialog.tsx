import React, {Fragment} from 'react';
import {classMaker} from '../helpers/classes';
import './dialog.scss';
import Icon from '../icon/icon';
import {createPortal} from 'react-dom';

interface DialogProps {
  visible: boolean,
  buttons?: Array<React.ReactElement>,
  onClose: React.MouseEventHandler,
  maskClosable?: boolean
}
const scopeClass = classMaker('dialog');
const sc = scopeClass;
const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  const isShowFooter: boolean = (props.buttons && props.buttons.length > 0) ? true : false;
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.maskClosable) {
      props.onClose(e);
    }
  };
  const template = (
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
      <div className={sc('mask')} onClick={onClickMask}></div>
    </Fragment>
  );
  return props.visible ?
    createPortal(template, document.body) :
    null;
};
export default Dialog;
Dialog.defaultProps = {
  maskClosable: true
};
// 以element元素为样板克隆并返回新的React元素。返回元素的props是将新的props与原始元素的props浅层合并后的结果。
// 新的子元素将取代现有的子元素，而来自原始元素的key和ref将被保留
// React.cloneElement(element,[props],[...children])
// ------
// ReactDOM.createPortal(child,container)：将子节点渲染到存在于父组件以外的DOM节点的优秀的方案
// 参数1：任何可渲染的React子元素：元素，字符串或Fragment
// 参数2：DOM元素
