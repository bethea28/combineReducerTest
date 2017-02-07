
import { combineReducers } from 'redux';
import youtubeReducer from './youtubeReducer';
import tvReducer from './tvReducer';


const rootReducer = combineReducers({
  tv: tvReducer,
  youtube: youtubeReducer

});

export default rootReducer;
