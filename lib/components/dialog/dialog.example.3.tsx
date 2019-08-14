import React from 'react';
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
    <Button color={'primary'} onClick={onClickAlert}>
      open alert
    </Button>
  );
};

export default DialogExample3;
