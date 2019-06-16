import React from 'react';
import Content from './content';
import Header from './header';
import Layout from './layout';
import Footer from './footer';

const LayoutExample: React.FunctionComponent = (props) => {
  return (
    <div>
      <div>
        <h3>first example</h3>
        <Layout
          style={{ border: '2px solid red', height: '400px' }}
          className="my-layout"
        >
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </div>
    </div>
  );
};
export default LayoutExample;
