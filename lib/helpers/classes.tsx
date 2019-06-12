// TypeScript定义数组元素：
// 1. let list: number[] = [1,2,3]
// 2. let list: Array<string> = [1,2,3]
const classes = (...classNames: Array<string | undefined>) => {
  return classNames.filter(Boolean).join(' ');
};
export default classes;
// 可以先把第一个参数固定
export const classMaker = (prefix?: string) => (name?: string) => [`wui-${prefix}`, name]
  .filter(Boolean)
  .join('-');
