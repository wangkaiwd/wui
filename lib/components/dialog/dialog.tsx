import React, { Fragment } from 'react';
import { classMaker } from '../../helpers/classes';
import './dialog.scss';
import Icon from '../icon/icon';
import ReactDOM, { createPortal } from 'react-dom';
import Button from '../button/button';

// 这里有一个问题： 接口定义的属性无法很好地和默认属性结合
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
    if (props.maskClosable) { // 这里不会影响到代码出错
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
            React.cloneElement(button, { key: i })
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
Dialog.defaultProps = {
  maskClosable: true,
  // onClose: (e) => {
  // }
};
export default Dialog;
const alert = (content: string) => {
  return modal(content);
};
const confirm = (content: string, onOk?: () => void, onCancel?: () => void) => {
  const onClickOk = () => {
    onClose();
    onOk && onOk();
  };
  const onClickCancel = () => {
    onClose();
    onCancel && onCancel();
  };
  // confirm的buttons我们可以自己帮用户写好
  const buttons = [
    <Button onClick={onClickOk}>ok</Button>,
    <Button onClick={onClickCancel}>cancel</Button>
  ];
  const onClose = modal(content, buttons, onClickCancel);
};
const modal = (content: React.ReactNode, buttons?: React.ReactElement[], afterClose?: () => void) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), container);
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  };
  const renderDialog = () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(component, container);
    return container;
  };
  const onClickIcon = () => {
    onClose();
    afterClose && afterClose();
  };
  const component = (
    <Dialog
      onClose={onClickIcon}
      visible={true}
      buttons={buttons}
    >
      {content}
    </Dialog>
  );
  const container = renderDialog();
  return onClose;
};
export { alert, confirm, modal };
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
// ------
// ReactDOM.unmountComponentAtNode()
// 从DOM中卸载组件，会将其事件处理器和state一并清除。如果组件被移除将返回true,如果没有组件可被移除将会返回false。如果指定容器
// 上没有对应已挂载的组件，这个函数什么也不会做。

