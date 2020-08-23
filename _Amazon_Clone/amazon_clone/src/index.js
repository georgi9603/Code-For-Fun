import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './StateManager/reducers/reducer';
import * as serviceWorker from './serviceWorker';
import { StateProvider } from './Components/StateProvider';
import { initialState } from './StateManager/initialState/initialState';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
