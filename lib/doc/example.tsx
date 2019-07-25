import React from 'react';
import './example.scss';
import Content from '../components/layout/content';
import Header from '../components/layout/header';
import Layout from '../components/layout/layout';
import { NavLink } from 'react-router-dom';
import Footer from '../components/layout/footer';
import Sider from '../components/layout/sider';
import Icon from '../components/icon/icon';
import routeConfigs from './route/routeConfigs';
// import IconExample from './icon/icon.example';
// 使用require引入文件可以避开ts的检查
const logo = require('../assets/imgs/logo.png');

const Example: React.FunctionComponent = (props) => {
  return (
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
            {routeConfigs.map(route => (
              <li>
                <NavLink to={route.path} activeClassName="example-sider-active">{route.name}</NavLink>
              </li>
            ))}
          </ul>
        </Sider>
        <Layout>
          <Content className="example-content">
            <div className="example-content-main">
              {props.children}
            </div>
          </Content>
          <Footer className="example-footer">
            footer
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Example;
