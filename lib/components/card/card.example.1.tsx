import React from 'react';
import Card from './card';
import Button from '../button/button';

const CardExample1 = () => {
  return (
    <Card
      title={'标题'}
      border
      hoverable
      extra={<Button color={'primary'}>extra button</Button>}
    >
      <ul>
        <li> Card content</li>
        <li> Card content</li>
        <li> Card content</li>
      </ul>
    </Card>
  );
};

export default CardExample1;
