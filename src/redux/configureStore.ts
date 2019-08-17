import * as Redux from 'redux';
import * as ReduxDevtools from 'redux-devtools-extension';

// Gera nosso state através de nossos reducers
const state = Redux.combineReducers({});

export type IAppState = ReturnType<typeof state>;


// Gera nossa store
const store = Redux.createStore(
  state,
  ReduxDevtools.composeWithDevTools() // enhancers // para usar no navegador
);

// exporta nossa store para ser utilizado no arquivo Root.tsx
export default store;