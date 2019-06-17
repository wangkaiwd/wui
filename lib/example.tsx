import React from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import IconExample from './icon/icon.example';
import Button from './button';
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
            <h3>组件</h3>
            <ul>
              <li>
                <Link to={'/icon'}>icon</Link>
              </li>
              <li>
                <Link to={'/button'}>button</Link>
              </li>
              <li>
                <Link to={'/dialog'}>dialog</Link>
              </li>
              <li>
                <Link to={'/layout'}>Layout</Link>
              </li>
            </ul>
          </Sider>
          <Layout>
            <Content className="example-content">
              <Route path={'/icon'} component={IconExample}/>
              <Route path={'/dialog'} component={DialogExample}/>
              <Route path={'/button'} component={Button}/>
              <Route path={'/layout'} component={LayoutExample}/>
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
