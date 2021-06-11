import React from 'react';
import Home from './patterns/05-pages/Home';
import { Switch, Route } from 'react-router-dom';
import SignIn from './patterns/05-pages/SignIn';
import ResetPassword from './patterns/05-pages/ResetPassword';
import Admin from './patterns/05-pages/Admin';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="reset-password" component={ResetPassword} />
        <Route path="/admin" component={Admin} />
        <Route path="*" component={Home} />
      </Switch>
    </>
  );
}

export default App;
