import React, {Fragment} from 'react';
import {classMaker} from '../helpers/classes';
import './dialog.scss';
import Icon from '../icon/icon';
import ReactDOM, {createPortal} from 'react-dom';

interface DialogProps {
  visible: boolean,
  buttons?: Array<React.ReactElement>,
  onClose: React.MouseEventHandler,
  maskClosable?: boolean
}
const scopeClass = classMaker('dialog');
const sc = scopeClass;
const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  const isShowFooter: boolean = !!(props.buttons && props.buttons.length > 0);
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
const alert = (content: string) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    div.remove();
    // 官方提供的卸载api，会将事件处理器和state一并清除
    ReactDOM.unmountComponentAtNode(div);
  };
  const component = (
    <Dialog onClose={onClose} visible={true}>{content}</Dialog>
  );
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};
export {alert};
// 以element元素为样板克隆并返回新的React元素。返回元素的props是将新的props与原始元素的props浅层合并后的结果。
// 新的子元素将取代现有的子元素，而来自原始元素的key和ref将被保留
// React.cloneElement(element,[props],[...children])
// ------
// ReactDOM.createPortal(child,container)：将子节点渲染到存在于父组件以外的DOM节点的优秀的方案
// 参数1：任何可渲染的React子元素：元素，字符串或Fragment
// 参数2：DOM元素
// ------
// ReactDOM.render(element,container,[,callback])
// 在提供的container里渲染一个React元素，并返回对该组件的引用
// 如果React元素之前已经在container里渲染过，这将会对其执行更新操作，并仅会在必要时改变DOM以映射最新的React元素
