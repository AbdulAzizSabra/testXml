export function detailsReducer(state = [], action) {
  switch (action.type) {
    case 'details':
      let cur = state;
      console.log('current', ...cur);
      cur.push(action.payload);
      return cur;
    default:
      return state;
  }
}
