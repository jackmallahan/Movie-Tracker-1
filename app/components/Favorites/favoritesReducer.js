const favorites = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, ...action.movie];
    case "SET_FAVES":
      return action.faves;
    case "REMOVE_FAVORITE":
      return state.filter(movie => movie.movie_id !== action.faveId);
    default:
      return state;
  }
};

export default favorites;
