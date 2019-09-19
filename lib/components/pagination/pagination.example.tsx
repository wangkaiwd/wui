import React, { useState } from 'react';
import Pagination from '@/components/pagination/pagination';
import Card from '@/components/card/card';

const PaginationExample: React.FunctionComponent = (props) => {
  const [current, setCurrent] = useState(1);
  return (
    <Card title={'分页'}>
      <Pagination
        total={1000}
        pageSize={10}
      />
      <Pagination
        onPageChange={(page, pageSize) => {
          console.log('pageChange', page, pageSize);
          setCurrent(page);
        }}
        current={current}
        total={1000}
        pageSize={10}
      />
    </Card>
  );
};

export default PaginationExample;
