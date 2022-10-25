export const reProducts = (state = [], action) => {
    switch (action.type) {
      case "PRODUCTS":
        return action.payload;
      default:
        return state;
    }
  };
  
  export const acProducts = (arr) => {
    return {
      type: "PRODUCTS",
      payload: arr,
    };
  };