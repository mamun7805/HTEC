import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Dashboard from './containers/home';

import Signin from './containers/signin';
function App(){

    return(

    <>  
      <Router>
          <Switch>
              <Route exact path = "/" component = {Signin} />
              <Route path = "/dashboard" component = {Dashboard} />
             
              
          </Switch>
          
      </Router>
    

    </>
    )
}

export default App;