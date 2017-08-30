import thunk from "redux-thunk";

export const getUser = newUser => {
  return {
    type: "ADD_USER",
    newUser
  };
};

export const saveData = data => {
  return {
    type: "SAVE_DATA",
    data
  };
};

export const getNowPlaying = url => {
  return function(dispatch) {
    fetch(url).then(data => data.json()).then(data => {
      return dispatch(saveData(data.results));
    });
  };
};
