import React from 'react';
import classes, { classMaker } from '@/helpers/classes';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  // total: number;
  // current?: number;
  // pageSize?: number;
  // onPageChange: (page: number, pageSize: number) => void
}

const sc = classMaker('pagination');
const Pagination: React.FC<Props> = (props) => {
  const { className, ...restProps } = props;
  return (
    <div
      className={classes(sc(), className)}
      {...restProps}
    >
      pagination
    </div>
  );
};

export default Pagination;
/*
*
* 属性：
* 1. 分页样式
* 2. total 总页数
* 3. pageSize 每页条数
* 4. current 当前页码
*
* 方法：
* 1. onPageChange
*
* */
