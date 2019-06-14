import React, {useState} from 'react';
import Dialog, {alert} from './dialog';

const DialogExample: React.FunctionComponent = (props) => {
  const [x, setX] = useState();
  const onClose = () => setX(false);
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
        {/*react只能通过自己来更新state的状态，而vue这里可以使用.sync语法糖进行简写*/}
        <button onClick={() => alert('1')}>alert me</button>
      </div>
    </div>
  );
};
export default DialogExample;
