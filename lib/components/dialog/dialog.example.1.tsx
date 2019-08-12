import React, { useState, Fragment } from 'react';
import Button from '@/components/button/button';
import Dialog from '@/components/dialog/dialog';

const DialogExample1 = () => {
  const [visible, setVisible] = useState();
  const onOk = () => {
    setVisible(true);
  };
  const onCancel = () => {
    setVisible(false);
  };
  return (
    <Fragment>
      <Button color="primary" onClick={() => setVisible(true)}>open dialog</Button>
      <Dialog
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
        title={'Delete Your Account'}
        buttons={[
          <Button color={'danger'} onClick={onCancel}>No</Button>,
          <Button color={'primary'} onClick={onCancel}>Yes</Button>
        ]}
      >
        Are you sure you want to delete your account
      </Dialog>
    </Fragment>
  );
};

export default DialogExample1;
