import React from 'react';

import './style.less';

import logo from './react.png';

class App extends React.Component {
  render() {
    const title = 'My Minimal React Webpack Babel Setup';

    return (
      <div>
        <img className="small" src={logo} alt="logo"/>
        {title}
      </div>
    );
  }
}

export default App;