export const reAds = (state = [], action) => {
  switch (action.type) {
    case "ADS":
      return action.payload;
    default:
      return state;
  }
};

export const acAds = (arr) => {
  return {
    type: "ADS",
    payload: arr,
  };
};