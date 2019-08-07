import React, { useState } from 'react';
import Dialog from './dialog';
import Button from '@/components/button/button';

const DialogExample = () => {
  const [visible, setVisible] = useState(false);
  const onOk = () => {
    setVisible(true);
  };
  const onCancel = () => {
    setVisible(false);
  };
  return (
    <div>
      <Button onClick={() => setVisible(true)}>click</Button>
      <Dialog
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
        title={'Delete Your Account'}
        buttons={[
          <Button color={'danger'} onClick={onCancel}>No</Button>,
          <Button color={'primary'} onClick={onCancel}>Yes</Button>
        ]}
      >
        Are you sure you want to delete your account
      </Dialog>
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
