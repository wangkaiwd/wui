import React from 'react';
import Button from './button';

const ButtonExample1: React.FC = () => {
  return (
    <div>
      <Button className="button">DEFAULT</Button>
      <Button color="primary" className="button">DEFAULT</Button>
      <Button color="danger" className="button">DEFAULT</Button>
      <Button color="danger" className="button" disabled>DISABLED</Button>

      <div>demo2</div>
      <Button icon="qq" className="button">DEFAULT</Button>
      <Button color="primary" icon="alipay" className="button">PRIMARY</Button>
      <Button color="danger" icon="wechat" className="button">DANGER</Button>
      <Button color="danger" icon="alipay" className="button" disabled>DISABLED</Button>

      <div>demo2</div>
      <Button shape="outline" className="button">DEFAULT</Button>
      <Button shape="outline" color="primary" className="button">DEFAULT</Button>
      <Button shape="outline" color="danger" className="button">DEFAULT</Button>
      <Button shape="outline" className="button" disabled>DISABLED</Button>
    </div>
  );
};

export default ButtonExample1;
