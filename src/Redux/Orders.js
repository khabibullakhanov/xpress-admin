export const acOrders = (data) => ({
  type: "AC_ORDERS",
  payload: data,
});

export const reOrders = (state = [], action) => {
  switch (action.type) {
    case "AC_ORDERS":
      return action.payload;
    default:
      return state;
  }
};

export const acViewOrder = (data) => ({
  type: "AC_VIEW_ORDER",
  payload: data,
});

export const reViewOrder = (state = [], action) => {
  switch (action.type) {
    case "AC_VIEW_ORDER":
      return action.payload;
    default:
      return state;
  }
};
