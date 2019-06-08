import classes from '../classes';

describe('函数classes', () => {
  it('接受 0 个className', () => {
    const result = classes();
    expect(result).toEqual('');
  });
  it('接受 1 个className', () => {
    const result = classes('a');
    expect(result).toEqual('a');
  });
  it('接受 2 个className', () => {
    const result = classes('a', 'b');
    expect(result).toEqual('a b');
  });
  it('接受各种奇怪的值', () => {
    const result = classes('a', undefined, null, '中文');
    expect(result).toEqual('a 中文');
  });
  it('接受undefined不会返回undefined', () => {
    const result = classes('a', undefined, 'b');
    expect(result).toEqual('a b');
  });
});
