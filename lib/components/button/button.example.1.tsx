import React, { Fragment } from 'react';
import Button from './button';

const ButtonExample1: React.FC = () => {
  return (
    <Fragment>
      <Button style={{ margin: '0 20px' }}>DEFAULT</Button>
      <Button color="primary" style={{ margin: '0 20px' }}>DEFAULT</Button>
      <Button color="danger" style={{ margin: '0 20px' }}>DEFAULT</Button>
      <Button color="danger" style={{ margin: '0 20px' }} disabled>DISABLED</Button>
    </Fragment>
  );
};

export default ButtonExample1;
