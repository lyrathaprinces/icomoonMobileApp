// @flow
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './Reducers';
import sagas from './Sagas';

export default function configureStore(reactotronStoreAction: any, INITIAL_STATE: any = {}) {
  const middleware = [];
  const sagaMiddleware = createSagaMiddleware();

  middleware.push(sagaMiddleware);

  // To get Reactotron working with redux, we need to use Reactotron.createStore instead of Redux createStore.
  // This doesn't sit too well with me. Leaving this here for now.
  // We are only using the Reactotron.createStore on development environment.
  // Make sure you run a deployment test before submitting.
  const store = (reactotronStoreAction || createStore)(reducers, INITIAL_STATE, applyMiddleware(...middleware));

  sagaMiddleware.run(sagas);

  return store;
}
