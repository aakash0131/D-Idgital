import React from 'react';
import { Switch, Route , Redirect} from 'react-router-dom';
import LoginPage from "./components/Login-page/LoginPage";
import HomePage from './components/Home-page/HomePage';

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' component={LoginPage}></Route>
          <Route exact path='/homepage' component={HomePage} />
        </Switch>
      </>
    );
  }
}

export default App;