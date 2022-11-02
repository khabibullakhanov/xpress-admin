export const acProducts = (arr) => {
  return {
    type: "PRODUCTS",
    payload: arr,
  };
};

export const reProducts = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS":
      return action.payload;
    default:
      return state;
  }
};

export const reRelodeProduct = (state = false, action) => {
  switch (action.type) {
    case "RELODEPRODUCT":
      return !state;
    default:
      return state;
  }
};

export const acRelodeProduct = () => {
  return {
    type: "RELODEPRODUCT",
  };
};
