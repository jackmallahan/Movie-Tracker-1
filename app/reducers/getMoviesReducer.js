const filmsNowPlaying = (state = [], action) => {
  console.log("movie reducer", action);
  switch (action.type) {
    case "SAVE_DATA":
      return [...state, ...action.results];
    default:
      return state;
  }
};

export default filmsNowPlaying;
