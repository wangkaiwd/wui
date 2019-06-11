// 文档地址：https://webpack.js.org/guides/printable/#requirecontext
const importAll = (r) => r.keys().forEach(r);
// 为什么要用try catch: 因为在测试的时候是没有require.context这个api的
try {
  importAll(require.context('../assets/svgs', false, /.svg$/));
} catch (e) {
}
