import * as action from "./actions";

// describe("GET_USERS action test", () => {
//   it("should add todo", () => {
//     const email = "email@email.com";
//     const password = "773mhd8JJoi49KM";

//     const expectedAction = {
//       type: "GET_USERS",
//       email: "email@email.com",
//       password: "773mhd8JJoi49KM"
//     };
//     expect(action.getUsers(email, password)).toEqual(expectedAction);
//   });
// });

describe("SAVE_DATA action test", () => {
  it("should save data", () => {
    const data = {
      adult: false,
      backdrop_path: "/o8u0NyEigCEaZHBdCYTRfXR8U4i.jpg",
      id: 396422,
      overview:
        "Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle.",
      poster_path: "/tb86j8jVCVsdZnzf8I6cIi65IeM.jpg",
      release_date: "2017-08-03",
      title: "Annabelle: Creation"
    };
    const expectedAction = {
      type: "SAVE_DATA",
      adult: false,
      backdrop_path: "/o8u0NyEigCEaZHBdCYTRfXR8U4i.jpg",
      id: 396422,
      overview:
        "Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle.",
      poster_path: "/tb86j8jVCVsdZnzf8I6cIi65IeM.jpg",
      release_date: "2017-08-03",
      title: "Annabelle: Creation"
    };
    expect(action.saveData(data)).toEqual(expectedAction);
  });
});

describe("LOGIN action test", () => {
  it("should log user in", () => {
    const email = "email@email.com";
    const password = "773mhd8JJoi49KM";

    const expectedAction = {
      type: "LOGIN",
      email: "email@email.com",
      password: "773mhd8JJoi49KM"
    };
    expect(action.login(userInfo)).toEqual(expectedAction);
  });
});

describe("REGISTER action test", () => {
  it("should register user", () => {
    const userInfo = {
      name: "Theonius",
      email: "email@email.com",
      password: "773mhd8JJoi49KM"
    };

    const expectedAction = {
      type: "GET_USERS",
      name: "Theonius",
      email: "email@email.com",
      password: "773mhd8JJoi49KM"
    };
    expect(action.register(userInfo)).toEqual(expectedAction);
  });
});

describe("ADD_FAVORITE action test", () => {
  it("should add favorite", () => {
    const movie = {
      adult: false,
      backdrop_path: "/o8u0NyEigCEaZHBdCYTRfXR8U4i.jpg",
      id: 396422,
      overview:
        "Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle.",
      poster_path: "/tb86j8jVCVsdZnzf8I6cIi65IeM.jpg",
      release_date: "2017-08-03",
      title: "Annabelle: Creation"
    };

    const expectedAction = {
      type: "ADD_FAVORITE",
      adult: false,
      backdrop_path: "/o8u0NyEigCEaZHBdCYTRfXR8U4i.jpg",
      id: 396422,
      overview:
        "Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle.",
      poster_path: "/tb86j8jVCVsdZnzf8I6cIi65IeM.jpg",
      release_date: "2017-08-03",
      title: "Annabelle: Creation"
    };
    expect(action.favorite(movie)).toEqual(expectedAction);
  });
});

describe("SET_FAVES action test", () => {
  it("should log user in", () => {
    const faves = {};

    const expectedAction = {
      type: "SET_FAVES",
      email: "email@email.com",
      password: "773mhd8JJoi49KM"
    };
    expect(action.setFavorites(faves)).toEqual(expectedAction);
  });
});

describe("GET_FROM_LOCAL action test", () => {
  it("should get local storage", () => {
    const storedUser = {};

    const expectedAction = {
      type: "GET_FROM_LOCAL",
      email: "email@email.com",
      password: "773mhd8JJoi49KM"
    };
    expect(action.getFromLocal(storedUser)).toEqual(expectedAction);
  });
});

describe("REMOVE_FAVE action test", () => {
  it("should remove movie from favorites", () => {
    const faves = {};

    const expectedAction = {
      type: "REMOVE_FAVE",
      email: "email@email.com",
      password: "773mhd8JJoi49KM"
    };
    expect(action.removeFave(faves)).toEqual(expectedAction);
  });
});
