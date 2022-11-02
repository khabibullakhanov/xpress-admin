// Action for employees
export const acEmployees = (employees) => {
  return {
    type: "EMPLOYEES",
    payload: employees,
  };
};

// reducer for employees
export const reEmployees = (state = [], action) => {
  switch (action.type) {
    case "EMPLOYEES":
      return action.payload;
    default:
      return state;
  }
};
