import React, { useState } from 'react';
import classes, { classMaker } from '@/helpers/classes';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  total: number;
  // current?: number;
  pageSize: number;
  // onPageChange: (page: number, pageSize: number) => void
}

const current = 0;
const sc = classMaker('pagination');
const Pagination: React.FC<Props> = (props) => {
  const {
    className,
    pageSize,
    total,
    ...restProps
  } = props;
  const [buttons, setButtons] = useState([]);
  const caculateList = () => {
    let result: string | number[] = Array.apply(null, { length: 10 }).map((item: undefined, i: number) => i);
    const pageCount = Math.ceil(total / pageSize);
    if (pageCount <= 10) {
      result = Array.apply(null, { length: pageCount }).map((item: undefined, i: number) => i);
    } else if (current >= 4) {

    }
  };
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
* 总条数<=10会正常展示
*     a. 1 2 3 4 5 6 7
* 总条数>=10 开始出现...
*     b. 1 2 3 4 5 6 ... 50   1 2 3 4 5 ... 50
*     c. 1 ... x-2 x-1 x x+1 x+2 ... 50
* 2. total 总页数
* 3. pageSize 每页条数
* 4. current 当前页码
*
* 方法：
* 1. onPageChange
*
* */
