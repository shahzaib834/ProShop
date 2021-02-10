import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import Reducer from './reducers/index';

const store = createStore(
  Reducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
