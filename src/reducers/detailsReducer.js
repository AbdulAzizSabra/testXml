export function detailsReducer(state = [], action) {
  switch (action.type) {
    case 'details':
      return [action.payload, ...state];
    default:
      return state;
  }
}
