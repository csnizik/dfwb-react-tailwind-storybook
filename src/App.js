import React from 'react';
import Home from './patterns/05-pages/Home';
import { Switch, Route } from 'react-router-dom';
import SignIn from './patterns/05-pages/SignIn';
import SignUp from './patterns/05-pages/SignUp';
import ResetPassword from './patterns/05-pages/ResetPassword';
import Admin from './patterns/05-pages/Admin';
import PageNotFound from './patterns/05-pages/PageNotFound';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="reset-password" component={ResetPassword} />
        <Route path="/admin" component={Admin} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
