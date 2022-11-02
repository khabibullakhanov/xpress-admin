// action upadte
export const acUpdateEmployee = () => {
  return {
    type: "UPDATE",
  };
};

export const reUpdateEmployee = (state = false, action) => {
  switch (action.type) {
    case "UPDATE":
      return !state;
    default:
      return state;
  }
};

// update products
export const acUpdateProducts = () => {
  return {
    type: "UPDATE_PRODUCTS",
  };
};

export const reUpdateProducts = (state = false, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCTS":
      return !state;
    default:
      return state;
  }
};
