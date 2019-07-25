import React, {useState} from 'react';
import Dialog, {alert, confirm, modal} from './dialog';

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
        <button onClick={() => closeModal()}>ok</button>
        <button onClick={() => closeModal()}>cancel</button>
      </div>
    );
    const closeModal = modal(modalHtml);
  };
  return (
    <div>
      <div>
        <h3>example 1</h3>
        {/*react只能通过自己来更新state的状态，而vue这里可以使用.sync语法糖进行简写*/}
        <button onClick={() => setX(true)}>click me</button>
        <Dialog
          visible={x}
          onClose={onClose}
          buttons={
            [
              <button onClick={() => setX(false)}>1</button>,
              <button onClick={() => setX(false)}>2</button>
            ]
          }
        >
          hi
        </Dialog>
      </div>
      <div>
        <h3>example 2</h3>
        <button onClick={() => alert('1')}>alert me</button>
      </div>
      <div>
        <h3>example 3</h3>
        <button onClick={() => confirm('confirm', onOk, onCancel)}>
          confirm me
        </button>
      </div>
      <div>
        <h3>example 5</h3>
        {/*
          这里由于要自己写html来实现一个modal，由于没有传入visible,那么我们没有办法去关闭dialog

          抽象：要在组件外面调用组件里的api
        */}
        <button onClick={onClickModal}>
          modal me
        </button>
      </div>
    </div>
  );
};
export default DialogExample;
