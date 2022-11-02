export const acEdite = (obj) => {
  return {
    type: "EDITE",
    obj,
  };
};

export const reEdite = (state = {}, action) => {
  switch (action.type) {
    case "EDITE":
      return action.obj;
    default:
      return state;
  }
};
