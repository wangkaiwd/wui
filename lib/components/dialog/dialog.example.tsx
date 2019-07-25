import React, {useState} from 'react';
import Dialog, {alert, confirm, modal} from './dialog';
import Button from '../button/button';

const DialogExample: React.FunctionComponent = (props) => {
  const [x, setX] = useState();
  const onClose = () => setX(false);
  const onOk = () => {
    console.log('ok');
  };
  const onCancel = () => {
    console.log('cancel');
  };
  const onClickModal = () => {
    const modalHtml = (
      <div>
        <h3>I am modal</h3>
        <Button onClick={() => closeModal()}>ok</Button>
        <Button onClick={() => closeModal()}>cancel</Button>
      </div>
    );
    const closeModal = modal(modalHtml);
  };
  return (
    <div>
      <div>
        <h3>example 1</h3>
        {/*react只能通过自己来更新state的状态，而vue这里可以使用.sync语法糖进行简写*/}
        <Button onClick={() => setX(true)}>click me</Button>
        <Dialog
          visible={x}
          onClose={onClose}
          buttons={
            [
              <Button onClick={() => setX(false)}>1</Button>,
              <Button onClick={() => setX(false)}>2</Button>
            ]
          }
        >
          hi
        </Dialog>
      </div>
      <div>
        <h3>example 2</h3>
        <Button onClick={() => alert('1')}>alert me</Button>
      </div>
      <div>
        <h3>example 3</h3>
        <Button onClick={() => confirm('confirm', onOk, onCancel)}>
          confirm me
        </Button>
      </div>
      <div>
        <h3>example 5</h3>
        {/*
          这里由于要自己写html来实现一个modal，由于没有传入visible,那么我们没有办法去关闭dialog

          抽象：要在组件外面调用组件里的api
        */}
        <Button onClick={onClickModal}>
          modal me
        </Button>
      </div>
    </div>
  );
};
export default DialogExample;
