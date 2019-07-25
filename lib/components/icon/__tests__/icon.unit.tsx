import React from 'react';
import Icon from '../icon';
// 官方文档地址：https://zh-hans.reactjs.org/docs/test-renderer.html
import render from 'react-test-renderer';

describe('Icon组件', () => {
  it('render successfully', () => {
    const json = render.create(<Icon name={'qq'}/>).toJSON();
    expect(json).toMatchSnapshot();
  });
});
