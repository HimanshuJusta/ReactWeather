import React from 'react';
import ReactDOM from 'react-dom';
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Example from 'Example';

import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import 'foundation-sites/dist/foundation.min.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Example}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
