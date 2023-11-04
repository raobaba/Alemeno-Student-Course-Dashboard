import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from '../reducers/UserReducer';
import {courseReducer,detailsReducer} from '../reducers/CourseReducer';
import thunk from 'redux-thunk'; // Import Redux Thunk
import studentReducer from '../reducers/EnrollReducer';

const rootReducer = combineReducers({
  app: reducer,
  courses: courseReducer,
  course:detailsReducer,
  student: studentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;