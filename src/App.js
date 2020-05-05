import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Layout from "./hoc/Layout/Layout";
import Main from "./containers/Main/Main";

class App extends Component {

  render() {
    let routes = (
            <Switch>
              <Route to={'/'} exact component={Main}/>
              <Route to={'/'} exact component={Main}/>
              <Redirect to='/'/>
            </Switch>
    )
    return (
        <Layout>
          { routes }
        </Layout>
    );
  }


}

export default App;
