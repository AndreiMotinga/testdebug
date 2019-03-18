import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const a = 3 + 4;
  debugger
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
