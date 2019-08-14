import React from 'react';
import Button from '@/components/button/button';
import Dialog from '@/components/dialog/dialog';

const DialogExample2 = () => {
  const onClickModal = () => {
    const content = (
      <div>
        <p>I am content</p>
        <Button onClick={() => closeModal()}>取消</Button>
      </div>
    );

    const closeModal = Dialog.modal({
      title: 'Modal',
      content
    });
  };
  return (
    <Button onClick={onClickModal} color={'primary'}>open modal</Button>
  );
};

export default DialogExample2;
