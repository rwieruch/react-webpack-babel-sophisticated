import React from 'react';
import ReactDOM from 'react-dom';

import './index.less';

import App from './App';

const title = 'My Sophisticated React Webpack Babel Setup';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();