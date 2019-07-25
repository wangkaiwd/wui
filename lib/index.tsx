import React, {Fragment, MouseEventHandler} from 'react';
import ReactDOM from 'react-dom';
import Icon from './components/icon/icon';

const onClick: MouseEventHandler = (e) => {
  console.log('click', e.target);
};
ReactDOM.render(
  <Fragment>
    {/*自定义组件上绑定的属性和方法都是自定义的，并不是原生支持的。这里的onClick是自定义事件*/}
    <Icon name="wechat" onClick={onClick}/>
    <Icon name="alipay"/>
    <Icon name="qq"/>
  </Fragment>,
  document.getElementById('root')
);
