const app = (state = {}, action) => {
  switch (action.type) {
    case "GET_FROM_LOCAL":
      return action.storedUser;
    default:
      return state;
  }
};

export default app;
