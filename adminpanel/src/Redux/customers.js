export const acCustomers = (customers) => ({
  type: "CUSTOMERS",
  payload: customers,
});

export const reCustomers = (state = [], action) => {
  switch (action.type) {
    case "CUSTOMERS":
      return action.payload;
    default:
      return state;
  }
};


