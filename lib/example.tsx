import React from 'react';
import { HashRouter as Router, NavLink, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import IconExample from './icon/icon.example';
import DialogExample from './dialog/dialog.example';
import LayoutExample from './layout/layout.example';
import './example.scss';
import Content from './layout/content';
import Header from './layout/header';
import Layout from './layout/layout';
import Footer from './layout/footer';
import Sider from './layout/sider';
// import logo from './assets/imgs/logo.png';
const logo = require('./assets/imgs/logo.png');

const Example: React.FunctionComponent = (props) => {
  return (
    <Router>
      <Layout className="example">
        <Header className="example-header">
          <div className="example-logo">
            <img src={logo} alt=""/>
          </div>
          <h3 className="example-name">WUI</h3>
        </Header>
        <Layout className="example-content-wrapper">
          <Sider className="example-sider">
            <h3 className="example-sider-component">组件</h3>
            <ul>
              <li>
                <NavLink to={'/icon'} activeClassName="example-sider-active">icon</NavLink>
              </li>
              <li>
                <NavLink to={'/dialog'} activeClassName="example-sider-active">dialog</NavLink>
              </li>
              <li>
                <NavLink to={'/layout'} activeClassName="example-sider-active">Layout</NavLink>
              </li>
            </ul>
          </Sider>
          <Layout>
            <Content className="example-content">
              <div className="example-content-main">
                <Route path={'/icon'} component={IconExample}/>
                <Route path={'/dialog'} component={DialogExample}/>
                <Route path={'/layout'} component={LayoutExample}/>
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
