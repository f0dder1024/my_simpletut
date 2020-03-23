import { combineReducers } from 'redux';
import postsReducer from './posts/PostsReducer';

const rootReducer = combineReducers({
  postsReducer
});

export default rootReducer;
