import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Layout from "./hoc/Layout/Layout";
import Main from "./containers/Main/Main";
import Auth from "./containers/Auth/Auth";
import {connect} from "react-redux";
import {autoLogin} from "./store/actions/auth";

class App extends Component {

    componentDidMount() {
        this.props.authLogin()
    }

    render() {
    let routes = (
            <Switch>
                <Route path={'/auth'} exact component={Auth}/>
                <Redirect to='/auth'/>
            </Switch>
    )

      if (this.props.isAuthenticated) {
          routes = (
              <Switch>
                  <Route path={'/'} exact component={Main}/>
                  <Redirect to='/'/>
              </Switch>
          )
      }
    return (
        <Layout>
          { routes }
        </Layout>
    );
  }


}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        authLogin: () => dispatch(autoLogin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
