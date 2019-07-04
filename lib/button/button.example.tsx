import React from 'react';
import Button from './button';

const ButtonExample: React.FC = () => {
  return (
    <div>
      <h3>demo1</h3>
      <Button className="hhh">DEFAULT</Button>
      <h3>demo1</h3>
      <Button className="hhh" color="primary">DEFAULT</Button>
      <h3>demo1</h3>
      <Button className="hhh" color="danger">DEFAULT</Button>
      <h3>demo1</h3>
      <Button className="hhh" color="danger" disabled>DISABLED</Button>
    </div>
  );
};

export default ButtonExample;
