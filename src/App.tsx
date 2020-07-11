import React from 'react';
import {Switch, Router, Route,} from 'react-router-dom';
import {AllTrav} from './View/AllTrav';
import history from './history'
import Land from './View/Land';

 
 

function App() {



  

  return (
    <>
       
        <Router history={history}>
          <Switch>
 <Route exact path='/alltravels' component={AllTrav} />
<Route exact path='/' component={Land} />
          </Switch>
  </Router> 
 
  


   </>
  );
}

export default App;
