import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Company from './containers/company';
import CompanyList from './components/company/company';
import LoginContainer from './containers/login';

import SignUpContainer from './containers/signup';
import rootMainContainer from './containers/rootContainer';
import DashboardContainer from './containers/dashboard';
import Student from './containers/student';
import StudentData from './components/student/student';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import * as mat from 'material-ui';

import {
  browserHistory,
  Router,
  Route,
  IndexRoute,
  IndexRedirect,
  Link,
  IndexLink
} from 'react-router';

class RootComponent extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Provider store={store}>
            <Router history={browserHistory}>
              <Route path="/" component={rootMainContainer}>
                <IndexRedirect to="/login" />
                <Route path="/dashboard" component={DashboardContainer} />
                <Route path="/student" component={Student} />
                <Route path="/studentList" component={StudentData} />
                 <Route path="/company" component={Company} />
                <Route path="/companyData" component={CompanyList} />
              </Route>
              <Route path="/login" component={LoginContainer}>
              </Route>
              <Route path="/signup" component={SignUpContainer}>
              </Route>
            </Router>
          </Provider>
        </MuiThemeProvider>
      </div>
    );
  }
}

ReactDOM.render((
  <RootComponent />
),
  document.getElementById('root')
);
