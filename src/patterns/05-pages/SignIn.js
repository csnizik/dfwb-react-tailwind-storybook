import classNames from 'classnames';
import React from 'react';
import Users from '../04-templates/layouts/Users';

const SignIn = () => {
  return (
    <main className={classNames('flex-grow')}>
      <Users />
    </main>
  );
};

export default SignIn;
