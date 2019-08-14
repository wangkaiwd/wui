import React, { Fragment } from 'react';
import Button from '@/components/button/button';

const ButtonExample2 = () => {
  return (
    <Fragment>
      <Button icon="qq" style={{ margin: '20px' }}>DEFAULT</Button>
      <Button color="primary" icon="alipay" style={{ margin: '20px' }}>PRIMARY</Button>
      <Button color="danger" icon="wechat" style={{ margin: '20px' }}>DANGER</Button>
      <Button color="danger" icon="alipay" style={{ margin: '20px' }} disabled>DISABLED</Button>
    </Fragment>
  );
};

export default ButtonExample2;
