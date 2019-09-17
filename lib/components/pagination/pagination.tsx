import React from 'react';
import classes, { classMaker } from '@/helpers/classes';
import './pagination.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  total: number;
  current: number;
  pageSize: number;
  onPageChange: (page: number, pageSize: number) => void
}

type PageItem = number | '...'

const sc = classMaker('pagination');
const Pagination: React.FC<Props> = (props) => {
  const {
    className,
    pageSize,
    total,
    current,
    onPageChange,
    ...restProps
  } = props;
  const calculateList = () => {
    const pageCount = Math.ceil(total / pageSize);
    let result: PageItem[] = [1, current - 2, current - 1, current, current + 1, current + 2, pageCount];
    return result
      .sort((a: number, b: number) => a - b)
      .filter((item, i, array) => array.indexOf(item) === i)
      .filter(item => (item >= 1 && item <= pageCount))
      .reduce((count: PageItem[], item: number, i: number, array) => {
        if (array[i + 1] && item + 1 !== array[i + 1]) {
          count.push(item, '...');
        } else {
          count.push(item);
        }
        return count;
      }, []);
  };
  return (
    <div
      className={classes(sc(), className)}
      {...restProps}
    >
      <ul className={sc('item-wrapper')}>
        {calculateList().map((button: PageItem, i: number) => {
            // 这里使用
            if (button === '...') {
              return <li
                key={i}
                className={sc('item', 'item-ellipsis')}
              >
                {button}
              </li>;
            } else {
              return <li
                key={i}
                onClick={() => onPageChange(button, pageSize)}
                className={sc('item', 'item-number', { 'item-active': button === current })}
              >
                {button}
              </li>;
            }
          }
        )}
      </ul>
    </div>
  );
};

export default Pagination;
