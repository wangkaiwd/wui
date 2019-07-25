import React from 'react';
import './importAllSvg';
import './icon.scss';
import classes from '../../helpers/classes';
// Icon 属性继承了React的SVG属性 并且需要传入SVGElement来作为参数
// 这样就可以将所有svg支持的原生属性都在Icon组件上支持
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string,
}

// 展开属性: 这里的{}是用来识别js语法的，并不是代表对象。
// {...props}: 表示执行{}中的js语法...props
// 具体过程可以通过babel online：https://babeljs.io/repl/ 来进行编译尝试
const Icon: React.FunctionComponent<IconProps> =
  ({className, name, ...restProps}) => {
    return (
      //这里的onClick是js原生的click方法，点击Icon组件，相当于点击组件的根节点，这里通过原生方法触发自定义方法

      // 当Icon组件也传入className的时候，svg的className的值覆盖，而vue会将className用空格进行合并
      <svg
        className={classes('wui-icon', className)}
        {...restProps}
      >
        <use xlinkHref={`#${name}`}/>
      </svg>
    );
  };
export default Icon;
