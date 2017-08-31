const login = (state = [], action) => {
  switch (action.type) {
    case "LOGIN":
      return action.userInfo;
    default:
      return state;
  }
};

export default login;
