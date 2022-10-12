// Action for employees
export const acAboutHome = (about) => {
  return {
    type: "AC_ABOUT_HOME",
    payload: about,
  };
};

// reducer for employees
export const reAboutHome = (state = {}, action) => {
  switch (action.type) {
    case "AC_ABOUT_HOME":
      return action.payload;
    default:
      return state;
  }
};
