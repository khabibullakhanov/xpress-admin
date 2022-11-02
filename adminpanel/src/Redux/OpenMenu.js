export const acOpenMenu = (boolean) => {
  return {
    type: "OPEN_MENU",
    payload: boolean,
  };
};

export const reOpenMenu = (state = false, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return action.payload;
    default:
      return state;
  }
};
