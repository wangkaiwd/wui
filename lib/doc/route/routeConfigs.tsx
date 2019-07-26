import { lazy } from 'react';
import React from 'react';

interface RouteConfig {
  path: string;
  component: React.FunctionComponent,
  name: string
}

const lazyComponent = (dir: string) => lazy(() => import(`../../components/${dir}`));
const routeConfigs: RouteConfig[] = [
  { path: '/icon', component: lazyComponent('icon/icon.example'), name: 'Icon 图标' },
  { path: '/button', component: lazyComponent('button/button.example'), name: 'Button 按钮' },
  { path: '/layout', component: lazyComponent('layout/layout.example'), name: 'Layout 布局' },
  { path: '/card', component: lazyComponent('card/card.example'), name: 'Card 卡片' },
  { path: '/dialog', component: lazyComponent('dialog/dialog.example'), name: 'Dialog 对话框' },
  { path: '/form', component: lazyComponent('form/form.example'), name: 'Form 表单' }
];
export default routeConfigs;
