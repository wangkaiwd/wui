import React, {Fragment} from 'react';

interface DialogProps {
  visible: boolean,
  buttons?: Array<React.ReactElement>
}
const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  const isShowFooter: boolean = (props.buttons && props.buttons.length > 0) ? true : false;
  return (
    <Fragment>
      <div className="wui-dialog">
        <header className="wui-dialog">title</header>
        <main>content</main>
        {isShowFooter &&
        <footer>
          {props.buttons && props.buttons.map((button, i) =>
            React.cloneElement(button, {key: i})
          )}
        </footer>}
      </div>
      <div className="wui-mask"></div>
    </Fragment>
  );
};
export default Dialog;
// 以element元素为样板克隆并返回新的React元素。返回元素的props是将新的props与原始元素的props浅层合并后的结果。
// 新的子元素将取代现有的子元素，而来自原始元素的key和ref将被保留
// React.cloneElement(element,[props],[...children])
