import { FETCH_JOURNEY } from '../actions';

export function journeyReducer(state = null, action) {
  switch (action.type) {
    case FETCH_JOURNEY:
      return action.payload;
    default:
      return state;
  }
}
