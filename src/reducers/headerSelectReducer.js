import { HEADER_SELECT } from '../actions';

export function selectReducer(state = '', action) {
  switch (action.type) {
    case HEADER_SELECT:
      return action.payload;
  }
  return state;
}
