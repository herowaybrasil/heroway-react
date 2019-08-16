import React from 'react';
import * as ReactRedux from 'react-redux';

import App from './App';
import store from './redux/configureStore';

// Configura nossa store para ser utilizada pelo Redux
const Root = () => {
  return (
    <ReactRedux.Provider store={store}>
      <App />
    </ReactRedux.Provider>
  )
}

export default Root;