import React from 'react';
import {HashRouter as Router, Link, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import IconExample from './icon/icon.example';
import Button from './button';

const Example: React.FunctionComponent = (props) => {
  return (
    <Router>
      <header>
        Fui
      </header>
      <div className={'body'}>
        <aside>
          <h3>组件</h3>
          <ul>
            <li>
              <Link to={'/icon'}>icon</Link>
            </li>
            <li>
              <Link to={'/button'}>button</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path={'/icon'} component={IconExample}/>
          <Route path={'/button'} component={Button}/>
        </main>
      </div>
    </Router>
  );
};
ReactDOM.render(<Example/>, document.getElementById('root'));
