export default function(state, action) {
  if (state === undefined) {
    return null;
  }

  if (action.type === 'ACTIVE_CITY') {
      console.log('here in the reducer');
    return action.payload;
  }
  return state;
}

