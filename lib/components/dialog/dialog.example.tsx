import React, { useState } from 'react';
import Dialog from './dialog';
import Button from '@/components/button/button';

const DialogExample = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisible(true)}>click</Button>
      <Dialog
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        Are you sure you want to delete your account
      </Dialog>
    </div>
  );
};

export default DialogExample;
