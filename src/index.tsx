import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { 
  BrowserRouter as Router,
 } from 'react-router-dom';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import Admin from './pages/Admin';
import PageNotFound from './pages/PageNotFound';

import 'semantic-ui-css/semantic.min.css';
import { Switch, Route } from 'react-router';

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact={true} path="/" component={Resume}/>
        <Route exact={true} path="/projects" component={Projects}/>
        <Route exact={true} path="/blog" component={Blog}/>
        <Route exact={true} path="/admin" component={Admin}/>
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
