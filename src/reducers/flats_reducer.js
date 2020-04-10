export default function (state, action) {
  //compute and return the new state
  if (state === undefined) {
    return [];
  }
  if (action.type === "SET_FLATS") {
    return action.payload;
  } else {
    return state;
  }
}
