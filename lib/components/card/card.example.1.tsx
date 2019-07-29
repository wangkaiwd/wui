import React from 'react';
import Card from './card';
import Button from '../button/button';

const CardExample1 = () => {
  return (
    <Card
      title={'Input'}
      border
      hoverable
      extra={<Button color={'primary'}>extra button</Button>}
      meta={'标准Input组件'}
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
