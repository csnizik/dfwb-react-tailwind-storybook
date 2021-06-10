import classNames from 'classnames';
import React from 'react';
import PageAdministration from '../04-templates/layouts/PageAdministration';

const Admin = () => {
  return (
    <main className={classNames('flex-grow')}>
      <PageAdministration />
    </main>
  );
};

export default Admin;
