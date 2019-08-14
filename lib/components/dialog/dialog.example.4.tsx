import React, { Fragment } from 'react';
import Dialog from '@/components/dialog/dialog';
import Button from '@/components/button/button';

const DialogExample4 = () => {
  const onClickConfirm = () => {
    Dialog.confirm({
      title: 'Confirm',
      content: 'ConfirmContent'
    });
  };
  return (
    <Fragment>
      <Button color={'primary'} onClick={onClickConfirm}>open confirm</Button>
    </Fragment>
  );
};

export default DialogExample4;
