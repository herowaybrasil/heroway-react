import * as Redux from 'redux';
import * as ReduxDevtools from 'redux-devtools-extension';

import todosReducer from './reducers/todos'

// Gera nosso state através de nossos reducers
const state = Redux.combineReducers({
  todosReducer: todosReducer
});

// Gera nossa store
const store = Redux.createStore(
  state,
  ReduxDevtools.composeWithDevTools()
);

// exporta nossa store para ser utilizado no arquivo Root.tsx
export default store;