import React from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import Icon from './patterns/01-atoms/images/Icon';

import Sidebar from './patterns/02-molecules/navigation/Sidebar';
import classNames from 'classnames';

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
