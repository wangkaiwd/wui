import React, { useMemo, useState } from 'react';
import classes, { classMaker } from '@/helpers/classes';
import './pagination.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  total: number;
  current?: number;
  pageSize?: number;
  onPageChange?: (page: number, pageSize: number) => void;
  defaultCurrent?: number;
  defaultPageSize?: number;
}

interface NewProps {
  newCurrent: number;
  newPageSize: number;
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
    defaultCurrent,
    defaultPageSize,
    ...restProps
  } = props;
  const [stateCurrent, setStateCurrent] = useState<number>(defaultCurrent!);
  
  const defaultValues = useMemo<NewProps>(() => {
    return {
      newCurrent: current || stateCurrent,
      newPageSize: pageSize || defaultPageSize!
    };
  }, [current, stateCurrent, pageSize, defaultPageSize]);

  const handleBoundary = (result: PageItem[], newCurrent: number, pageCount: number): PageItem[] => {
    if (newCurrent - 2 <= 1) {
      result = [1, 2, 3, 4, 5, pageCount];
    } else if (newCurrent + 2 >= pageCount) {
      result = [1, pageCount - 4, pageCount - 3, pageCount - 2, pageCount - 1, pageCount];
    }
    return result;
  };

  const addEllipsis = (count: PageItem[], item: number, i: number, array: PageItem[]) => {
    if (array[i + 1] && item + 1 !== array[i + 1]) {
      count.push(item, '...');
    } else {
      count.push(item);
    }
    return count;
  };

  const pageItem = useMemo((): (number | '...')[] => {
    const { newCurrent, newPageSize } = defaultValues;
    const pageCount = Math.ceil(total / newPageSize);
    let result: PageItem[] = [1, newCurrent - 2, newCurrent - 1, newCurrent, newCurrent + 1, newCurrent + 2, pageCount];
    return handleBoundary(result, newCurrent, newPageSize)
      .sort((a: number, b: number) => a - b)
      .filter((item, i, array) => array.indexOf(item) === i)
      .filter(item => (item >= 1 && item <= pageCount))
      .reduce(addEllipsis, []);
  }, [defaultValues]);

  const onClickItemNumber = (button: number): void => {
    if (!current) {setStateCurrent(button);}
    onPageChange && onPageChange(button, defaultValues.newPageSize);
  };
  return (
    <div
      className={classes(sc(), className)}
      {...restProps}
    >
      <ul className={sc('item-wrapper')}>
        {pageItem.map((button: PageItem, i: number) => {
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
                onClick={() => onClickItemNumber(button)}
                className={sc('item', 'item-number', { 'item-active': button === defaultValues.newCurrent })}
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
Pagination.defaultProps = {
  defaultCurrent: 1,
  defaultPageSize: 10
};
