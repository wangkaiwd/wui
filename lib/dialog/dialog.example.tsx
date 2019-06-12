import React from 'react';
import Dialog from './dialog';

const DialogExample: React.FunctionComponent = (props) => {
  return (
    <Dialog
      visible={false}
      buttons={[<button>1</button>, <button>2</button>]}
    >
      hi
    </Dialog>
  );
};
export default DialogExample;
