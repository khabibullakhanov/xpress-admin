export const reOrder = (state = [], action) => {
    switch (action.type) {
      case "ORDERS":
        return action.payload;
      default:
        return state;
    }
  };
  
  export const acOrders = (arr) => {
    return {
      type: "ORDERS",
      payload: arr,
    };
  };