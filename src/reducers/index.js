import { combineReducers } from 'redux';
import { journeyReducer } from './journeyReducer';
import { detailsReducer } from './detailsReducer';
import { selectReducer } from './headerSelectReducer';

const rootReducer = combineReducers({
  journeys: journeyReducer,
  details: detailsReducer,
  selected: selectReducer
});

export default rootReducer;
