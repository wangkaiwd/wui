import React from 'react';
import Pagination from '@/components/pagination/pagination';
import Card from '@/components/card/card';

const PaginationExample: React.FunctionComponent = (props) => {
  return (
    <Card title={'分页'}>
      <Pagination total={100} pageSize={10}/>
    </Card>
  );
};

export default PaginationExample;
