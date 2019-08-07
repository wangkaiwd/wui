import React, { Fragment } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import './dialog.scss';
import classes, { classMaker } from '@/helpers/classes';
import Icon from '@/components/icon/icon';
import Button from '@/components/button/button';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  title: string;
  buttons?: React.ReactNode[]
}

interface ModalProps {
  title: string;
  content: React.ReactNode;
}

interface AlertProps extends ModalProps {
  onCancel?: () => void
}

interface ConfirmProps extends AlertProps {
  onOk?: () => void
}

interface Dialog {
  modal (options: ModalProps): void

  alert (options: AlertProps): void;

  confirm (options: ConfirmProps): void;
}

const sc = classMaker('dialog');
const Dialog: React.FunctionComponent<Props> & Dialog = (props) => {
  const {
    visible,
    className,
    onOk,
    onCancel,
    title,
    buttons,
    ...restProps
  } = props;

  const onClose = () => {
    if (onCancel) {
      onCancel();
    }
  };
  const template = (
    <Fragment>
      <div className={classes(sc('content'), className)} {...restProps}>
        {
          title &&
          <header className={sc('header')}>
            {title}
          </header>
        }
        <main className={sc('main')}>
          {props.children}
        </main>
        {
          buttons && buttons.length > 0 &&
          <footer className={sc('footer')}>
            {/*<Button className={sc('no')} onClick={onOk} color={'danger'}>No</Button>*/}
            {/*<Button className={sc('yes')} onClick={onCancel} color={'primary'}>Yes</Button>*/}
            {buttons}
          </footer>
        }

        <div className={sc('close')} onClick={onClose}>
          <Icon name={'close'}/>
        </div>
      </div>
      <div className={sc('mask')}/>
    </Fragment>
  );
  return visible ? createPortal(template, document.body) : null;
};

Dialog.alert = ({
  title,
  content
}) => {
  // 我们无法改变visible,只能重新渲染一个visible为false的Dialog组件
  const reRenderDialog = (visible: boolean) => {
    let container: HTMLDivElement;
    if (visible) {
      container = document.createElement('div');
      container.classList.add('dialog-placeholder');
      document.body.appendChild(container);
    } else {
      container = document.querySelector<HTMLDivElement>('.dialog-placeholder')!;
    }
    const component = (
      <Dialog
        buttons={buttons}
        visible={visible}
        title={title}
        onCancel={close}
      >
        {content}
      </Dialog>
    );
    ReactDOM.render(component, container);
    return container;
  };
  const close = () => {
    const container = reRenderDialog(false);
    // 从DOM中卸载组件，会将其事件处理器(event handlers)和state一并清除
    // 如果指定容器上没有对应已挂载的组件，这个函数什么也不会做
    // 如果组件被移除将会返回true,如果没有组件可被移除将会返回false
    ReactDOM.unmountComponentAtNode(container);
    // 将占位div从DOM中移除
    container.remove();
  };
  const buttons = [
    <Button color={'primary'} onClick={close}>取消</Button>
  ];
  reRenderDialog(true);

};
Dialog.confirm = ({ title, content, onCancel, onOk }) => {
  const reRenderDialog = (visible: boolean,) => {
    let container: HTMLDivElement;
    if (visible) {
      container = document.createElement('div');
      container.classList.add('dialog-placeholder');
      document.body.appendChild(container);
    } else {
      container = document.querySelector<HTMLDivElement>('.dialog-placeholder')!;
    }
    const component = (
      <Dialog
        buttons={buttons}
        visible={visible}
        title={title}
        onCancel={close}
        onOk={onOk}
      >
        {content}
      </Dialog>
    );
    ReactDOM.render(component, container);
    return container;
  };
  const close = () => {
    const container = reRenderDialog(false);
    container.remove();
    ReactDOM.unmountComponentAtNode(container);
  };
  const onClickClose = () => {
    close();
    onCancel && onCancel();
  };
  const onClickOk = () => {
    close();
    onOk && onOk();
  };
  const buttons = [
    <Button color={'danger'} onClick={onClickClose}>取消</Button>,
    <Button color={'primary'} onClick={onClickOk}>确认</Button>
  ];
};
Dialog.modal = (options) => {

};
export default Dialog;
