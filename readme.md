## `wui`组件库
### 项目搭建
* 建立`webpack.config.js`来配置`webpack`
* 通过`awesome-typescript-loader`来解析`ts`文件
* 建立`webpack.config.dev.js`和`webpack.config.prod.js`来配置不同环境下的`webpack`配置

`yarn`安装依赖时的依赖环境设置： 
![yarn-add](./screenshots/yarn-add.png)

### `Icon`组件
* 通过`interface`来校验组件传入的参数
* `require.context`方法来导入所有的`svg`文件
* 使`Icon`组件支持所有的`svg`原生属性：  
  1. `interface extends React.SVGAttributes<SVGElement>`: 接口继承所有的`svg`原生属性
  2. `{...restProps}`来进行所有属性扩展： 注意这里的{}只是表示里边的内容是`js`语法，而并不是表示对象
  3. 定义`classes`函数来拼接传入的类名，实现`className`多类名书写
