import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from '../reducers/UserReducer';
import {courseReducer,detailsReducer} from '../reducers/CourseReducer';
import thunk from 'redux-thunk'; // Import Redux Thunk

const rootReducer = combineReducers({
  app: reducer,
  courses: courseReducer,
  course:detailsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;