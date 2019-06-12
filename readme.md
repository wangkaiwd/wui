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
### `Icon`组件测试
* `importAllSvg`文件中使用`try catch`,因为文件中的代码在测试环境执行会报错(编写可测试的代码)
* `jest`测试时，如果有非`js`文件，需要通过`moduleNameMapper`来进行配置对应得文件来进行`mock`,对应代码参考`test/__mocks__`目录下的文件
* 生成测试快照，可以通过肉眼来观察生成的`DOM`结构是否符合要求，对于简单组件来说比较好用

### `Dialog`组件
* `scopeClass`的封装思路
* `close`中的`Icon`为什么会受到`line-height`的影响
* 有些文件为什么要加`_`
* 在出现模态框后并进行上下滑动，划出后会出现白色区域

### `React Class`书写方式
* `constructor`的写法复习
* 绑定事件时`this`指向修改：  
  1. 在`jsx`中绑定时： `this.onClick.bind(this)`
  2. 提前在`constructor`中进行绑定： `this.onClick = this.onClick.bind(this)`
  3. 通过箭头函数定义函数：  
      ```js
      onClick = () => {console.log(this)}
      // 相当于如下代码
      constructor() {
         super()
         this.onClick = () => console.log(this)
      }
      ```
* `React class`写法中的计算属性: [存值函数(`getter`)和取值函数(`setter`)](https://es6.ruanyifeng.com/#docs/class#%E5%8F%96%E5%80%BC%E5%87%BD%E6%95%B0%EF%BC%88getter%EF%BC%89%E5%92%8C%E5%AD%98%E5%80%BC%E5%87%BD%E6%95%B0%EF%BC%88setter%EF%BC%89)
  ```js
   get name() {
      return `${firstName}${lastName}`
   }
  ```
* `dispalyName`属性的用法：  
  ```js
  // 添加一个显示的名字，方便在调试工具中查看
  static displayName = 'xxx'
  ```
