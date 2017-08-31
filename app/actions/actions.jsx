export const getUser = newUser => {
  return {
    type: "ADD_USER",
    newUser
  };
};

export const saveData = data => {
  return {
    type: "SAVE_DATA",
    data: data
  };
};

export const login = userInfo => {
  return {
    type: "LOGIN",
    userInfo
  };
};

export const getNowPlaying = url => {
  return dispatch => {
    fetch(url)
      .then(data => data.json())
      .then(data => dispatch(saveData(data.results)));
  };
};

export const postNewUser = user => {
  return dispatch => {
    fetch("/api/users/new", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(data => data.json())
      .then(parsedData => dispatch(getUser(parsedData)))
      .catch(e => console.log(e));
  };
};
