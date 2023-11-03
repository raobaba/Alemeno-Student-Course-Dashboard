import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from '../reducers/UserReducer';
import thunk from 'redux-thunk'; // Import Redux Thunk

const rootReducer = combineReducers({
  app: reducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;