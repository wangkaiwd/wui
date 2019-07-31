import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import './dialog.scss';
import classes, { classMaker } from '@/helpers/classes';
import Button from '@/components/button/button';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  title?: string
}

const sc = classMaker('dialog');
const Dialog: React.FunctionComponent<Props> = (props) => {
  const { visible, className, onOk, onCancel, title, ...restProps } = props;
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
        <footer className={sc('footer')}>
          <Button className={sc('no')} onClick={onOk} color={'danger'}>No</Button>
          <Button className={sc('yes')} onClick={onCancel} color={'primary'}>Yes</Button>
        </footer>
      </div>
      <div className={sc('mask')}/>
    </Fragment>
  );
  return visible ? createPortal(template, document.body) : null;
};

export default Dialog;
