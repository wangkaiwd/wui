import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import './dialog.scss';
import classes, { classMaker } from '@/helpers/classes';
import Icon from '@/components/icon/icon';

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
  buttons: React.ReactNode[]
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

Dialog.alert = (options) => {

};
Dialog.confirm = (options) => {

};
Dialog.modal = (options) => {

};
export default Dialog;
