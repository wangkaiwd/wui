import React, { Fragment } from 'react';
import './dialog.scss';
import classes, { classMaker } from '@/helpers/classes';
import Button from '@/components/button/button';

interface Props extends React.HTMLAttributes<HTMLDivElement>{
  visible: boolean
}

const sc = classMaker('dialog');
const Dialog: React.FunctionComponent<Props> = (props) => {
  const { visible, className, ...restProps } = props;
  return (
    <Fragment>
      <div className={classes(sc('content'), className)} {...restProps}>
        <header className={sc('header')}>
          header
        </header>
        <main className={sc('main')}>
          {props.children}
        </main>
        <footer className={sc('footer')}>
          <Button className={sc('no')} color={'danger'}>No</Button>
          <Button className={sc('yes')} color={'primary'}>Yes</Button>
        </footer>
      </div>
      <div className={sc('mask')}/>
    </Fragment>
  );
};

export default Dialog;
