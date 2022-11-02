// actin for update product
export const acUpdateProduct = (product) => ({
  type: "UPDATE_PRODUCT",
  payload: product,
});

export const reUpdateProduct = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCT":
      return action.payload;
    default:
      return state;
  }
};

// actin for id product
export const acIdProduct = (id) => ({
  type: "ID_PRODUCT",
  payload: id,
});

export const reIdProduct = (state = "", action) => {
  switch (action.type) {
    case "ID_PRODUCT":
      return action.payload;
    default:
      return state;
  }
};
