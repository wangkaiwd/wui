import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
// import IconExample from './icon/icon.example';
const IconExample = lazy(() => import(/* webpackChunkName: "iconExample" */'./icon/icon.example'));
import DialogExample from './dialog/dialog.example';
import LayoutExample from './layout/layout.example';
import './example.scss';
import Content from './layout/content';
import Header from './layout/header';
import Layout from './layout/layout';
import Footer from './layout/footer';
import Sider from './layout/sider';
import FormExample from './form/form.example';
import Icon from './icon/icon';
import ButtonExample from './button/button.example';
// 使用require引入文件可以避开ts的检查
const logo = require('./assets/imgs/logo.png');

const Example: React.FunctionComponent = (props) => {
  return (
    <Router>
      <Layout className="example">
        <Header className="example-header">
          <div className="example-header-left">
            <div className="example-logo">
              <img src={logo} alt=""/>
            </div>
            <h3 className="example-name">WUI</h3>
          </div>
          <div className="example-header-right">
            <a href="https://github.com/wangkaiwd/wui" target="_blank">
              <Icon className="example-github" name="github"/>
            </a>
          </div>
        </Header>
        <Layout className="example-content-wrapper">
          <Sider className="example-sider">
            <h3 className="example-sider-component">组件</h3>
            <ul>
              <li>
                <NavLink to={'/icon'} activeClassName="example-sider-active">Icon</NavLink>
              </li>
              <li>
                <NavLink to={'/dialog'} activeClassName="example-sider-active">Dialog</NavLink>
              </li>
              <li>
                <NavLink to={'/layout'} activeClassName="example-sider-active">Layout</NavLink>
              </li>
              <li>
                <NavLink to={'/form'} activeClassName="example-sider-active">Form</NavLink>
              </li>
              <li>
                <NavLink to={'/button'} activeClassName="example-sider-active">Button</NavLink>
              </li>
            </ul>
          </Sider>
          <Layout>
            <Content className="example-content">
              <div className="example-content-main">
                <Suspense fallback={<div>loading...</div>}>
                  <Switch>
                    <Route path={'/icon'} component={IconExample}/>
                    <Route path={'/dialog'} component={DialogExample}/>
                    <Route path={'/layout'} component={LayoutExample}/>
                    <Route path={'/form'} component={FormExample}/>
                    <Route path={'/button'} component={ButtonExample}/>
                  </Switch>
                </Suspense>
              </div>
            </Content>
            <Footer className="example-footer">
              footer
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};
ReactDOM.render(<Example/>, document.getElementById('root'));
