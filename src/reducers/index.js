import { combineReducers } from 'redux';
import { journeyReducer } from './journeyReducer';
import { detailsReducer } from './detailsReducer';

const rootReducer = combineReducers({
  journeys: journeyReducer,
  details: detailsReducer
});

export default rootReducer;
