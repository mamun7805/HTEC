import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Dashboard from './containers/home';
import Signin from './containers/signin';
import Statistics from './containers/statistics';
import Users from './containers/users'
function App(){

    return(

    <>  
      <Router>
          <Switch>
              <Route exact path = "/" component = {Signin} />
              <Route path = "/dashboard" component = {Dashboard} />
              <Route path = "/statistics" component = {Statistics} />
              <Route path = "/users" component = { Users} />

          </Switch>
          
      </Router>

    </>
    )
}

export default App;