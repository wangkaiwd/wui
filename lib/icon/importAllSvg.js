// 文档地址：https://webpack.js.org/guides/printable/#requirecontext
const importAll = (r) => r.keys().forEach(r);
importAll(require.context('../assets/svgs', false, /.svg$/));
