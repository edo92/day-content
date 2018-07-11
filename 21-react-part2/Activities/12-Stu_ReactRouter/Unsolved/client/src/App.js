import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
 
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
const App = () => (
 
  <div>
    <Nav />
    <Router>
    <Switch>
    <Route exact path= "/" exact component={Books}/>
    <Route  exact path= "/Books/:id" exact component={Books}/>
    <Route   component={NoMatch}/>
    </Switch>
    <Books />
    </Router>
  </div>
 
);

export default App;
