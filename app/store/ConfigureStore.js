import {applyMiddleware, createStore} from 'redux';

import reducers from './Reducers';

export default function configureStore(INITIAL_STATE :any = {}) {
  const store = (createStore)(reducers, INITIAL_STATE, applyMiddleware());
  return store;
}
