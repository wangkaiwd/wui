import React from 'react';
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
    <Button color={'primary'} onClick={onClickConfirm}>open confirm</Button>
  );
};

export default DialogExample4;
