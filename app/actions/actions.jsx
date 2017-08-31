export const getUsers = users => {
  return {
    type: "GET_USERS",
    users
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

export const register = userInfo => {
  return {
    type: "REGISTER",
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

export const signIn = user => {
  console.log("user", user);
  return dispatch => {
    fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(data => data.json())
      .then(data => {
        console.log(data);
        return dispatch(login(data));
      });
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
      .then(data => {
        data.ok ? data.json() : alert("User Already Exists");
      })
      .then(parsedData => {
        dispatch(register(parsedData));
      })
      .catch(err => console.log("in catch ", err));
  };
};

export const retrieveUsers = users => {
  return dispatch => {
    fetch("/api/users")
      .then(data => data.json())
      .then(data => dispatch(getUsers(data.data)));
  };
};
