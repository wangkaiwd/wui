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
  buttons?: React.ReactElement[]
}

interface ModalProps {
  title: string;
  content: React.ReactNode;
  buttons?: React.ReactElement[];
}

interface AlertProps {
  title: string;
  content: React.ReactNode;
}

interface ConfirmProps {
  title: string;
  content: React.ReactNode;
  onCancel?: () => void;
  onOk?: () => void;
}

interface Dialog {
  modal (options: ModalProps): () => void;

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
  Dialog.modal({ title, content });
};
Dialog.confirm = ({ title, content, onCancel, onOk }) => {
  const onClickCancel = () => {
    onCancel && onCancel();
    closeModal();
  };
  const onClickOk = () => {
    onOk && onOk();
    closeModal();
  };
  const buttons = [
    <Button onClick={onClickCancel} color={'danger'}>取消</Button>,
    <Button onClick={onClickOk} color={'primary'}>确认</Button>
  ];
  const closeModal = Dialog.modal({ title, content, buttons });
};
Dialog.modal = ({ title, content, buttons }) => {
  const close: () => void = () => {
    // React.cloneElement：以element元素为样板克隆并返回新的React元素。
    // 返回元素的props将是新的props与原始元素的props浅层合并后的结果
    // 新的子元素将取代现有的子元素
    // 几乎相当于：
    //  <element.type {...element.props} {...props}>{children}</element.type>
    ReactDOM.render(React.cloneElement(component, { visible: false }), container);
    container.remove();
    ReactDOM.unmountComponentAtNode(container);
  };
  const component = (
    <Dialog title={title} onCancel={close} visible={true} buttons={buttons}>
      {content}
    </Dialog>
  );
  const renderDialog = () => {
    const container = document.createElement('div');
    container.classList.add('dialog-placeholder');
    document.body.appendChild(container);
    ReactDOM.render(component, container);
    return container;
  };
  const container = renderDialog();
  return close;
};
export default Dialog;
