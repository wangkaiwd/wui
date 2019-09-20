import React, { Fragment } from 'react';
import Button from '@/components/button/button';

const ButtonExample3 = () => {
  return (
    <Fragment>
      <Button shape="outline" style={{ margin: '0 20px' }}>DEFAULT</Button>
      <Button shape="outline" color="primary" style={{ margin: '0 20px' }}>DEFAULT</Button>
      <Button shape="outline" color="danger" style={{ margin: '0 20px' }}>DEFAULT</Button>
      <Button shape="outline" style={{ margin: '0 20px' }} disabled>DISABLED</Button>
    </Fragment>
  );
};

export default ButtonExample3;
