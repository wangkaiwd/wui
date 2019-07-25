import { lazy } from 'react';
import React from 'react';

interface RouteConfig {
  path: string;
  component: React.FunctionComponent,
  name: string
}

const lazyComponent = (dir: string) => lazy(() => import(`../../components/${dir}`));
const routeConfigs: RouteConfig[] = [
  { path: '/icon', component: lazyComponent('icon/icon.example'), name: 'Icon' },
  { path: '/button', component: lazyComponent('button/button.example'), name: 'Button' },
  { path: '/layout', component: lazyComponent('layout/layout.example'), name: 'Layout' },
  { path: '/card', component: lazyComponent('card/card.example'), name: 'Card' },
  { path: '/dialog', component: lazyComponent('dialog/dialog.example'), name: 'Dialog' },
  { path: '/form', component: lazyComponent('form/form.example'), name: 'Form' }
];
export default routeConfigs;
