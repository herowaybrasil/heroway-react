import React from 'react';
import * as ReactRedux from 'react-redux';

import store from '../redux/configureStore';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <ReactRedux.Provider store={store}>
      <Routes />
    </ReactRedux.Provider>
  );
};

export default App;
