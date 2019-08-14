import React, { Fragment } from 'react';
import Button from '@/components/button/button';
import Dialog from '@/components/dialog/dialog';

const DialogExample3 = () => {
  const onClickAlert = () => {
    Dialog.alert({
      title: 'Alert',
      content: 'Alert Content'
    });
  };
  return (
    <Fragment>
      <Button color={'primary'} onClick={onClickAlert}>
        open alert
      </Button>
    </Fragment>
  );
};

export default DialogExample3;
