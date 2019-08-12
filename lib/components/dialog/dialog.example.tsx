import React from 'react';
import Dialog from './dialog';
import Button from '@/components/button/button';
import CodeItem from '@/doc/template/codeItem';
import DialogExample1 from '@/components/dialog/dialog.example.1';
import DialogExample2 from '@/components/dialog/dialog.example.2';

const DialogExample = () => {

  const onClickConfirm = () => {
    Dialog.confirm({
      title: 'Confirm',
      content: 'ConfirmContent'
    });
  };
  const onClickModal = () => {
    const content = (
      <div>
        <p>I am content</p>
        <Button onClick={() => closeModal()}>取消</Button>
      </div>
    );

    const closeModal = Dialog.modal({
      title: 'Modal',
      content
    });
  };
  return (
    <div>
      <CodeItem title="基础用法" meta="通过组件形式调用"
                code={require('!!raw-loader!@/components/dialog/dialog.example.1').default}>
        <DialogExample1/>
      </CodeItem>
      <CodeItem
        title="Modal"
        meta="自定义展示信息"
        code={require('!!raw-loader!@/components/dialog/dialog.example.2').default}
      >
        <DialogExample2/>
      </CodeItem>

      <h2>demo3</h2>
      <Button onClick={onClickConfirm}>click3</Button>

      <h2>demo4</h2>
      <Button onClick={onClickModal}>click4</Button>
    </div>
  );
};

export default DialogExample;
// 使用方式分析：
//  1. 比较繁琐的组件使用方式
//  2. 快捷使用方式(直接通过函数来进行调用)：
//      a. Dialog.alert({title:'xxx',content: 'xxx'}) , 展示效果  标题，内容，关闭图标， 取消按钮
//      b. Dialog.confirm({title:'xxx',content:'xxx',onOk,onCancel}) 在alert的基础上多了确认按钮
//      c. Dialog({title:'xxx',content:'xxx'}) 在alert上少了取消按钮，需要用户全部自定义
