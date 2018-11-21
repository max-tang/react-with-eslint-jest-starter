import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './components/Timer';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>
    <div>{title}</div>
    <Timer />
  </div>,
  document.getElementById('app'),
);

module.hot.accept();
