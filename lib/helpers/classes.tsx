// TypeScript定义数组元素：
// 1. let list: number[] = [1,2,3]
// 2. let list: Array<string> = [1,2,3]
const classes = (...classNames: Array<string | undefined>) => {
  return classNames.filter(Boolean).join(' ');
};
export default classes;
// 可以先把第一个参数固定
/**
 * 函数要实现的功能：
 *  1. 自己为class添加前缀 demo => wui-demo
 *  2. 将前缀进行缓存，然后为之后添加的类都添加缓存 sc = classMaker('demo')  sc('01')  output: wui-demo-01
 *  3. 传入的参数支持对象，值为true时将key作为class sc({hasSider:true,active: false}) output: wui-demo-hasSider
 *  4. 混合情况： sc('01','02',{hasSider:true}): wui-demo-01, wui-demo-02, wui-demo-hasSider
 */
interface X {
  [K: string]: boolean | string
}
export const classMaker = (prefix?: string) => (...names: Array<string | undefined | X>) => {
  const fullPrefix = `wui-${prefix}`;
  const resultNames = names
    .filter(Boolean)
    .reduce((result: Array<string>, name) => {
      if (typeof name === 'string' || typeof name === 'undefined') {
        const fullName = [fullPrefix, name].join('-');
        result.push(fullName);
      } else {
        for (const k in name) {
          if (name.hasOwnProperty(k)) {
            if (name[k]) {
              const fullName = [fullPrefix, k].join('-');
              result.push(fullName);
            }
          }
        }
      }
      return result;
    }, [])
    .join(' ');
  if (names[0] === '' || typeof names[0] === 'undefined') {
    return [fullPrefix, resultNames].join(' ');
  }
  return resultNames;
};
