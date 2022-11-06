export const reSort = (state = "all", action) => {
  switch (action.type) {
    case "SORT":
      return action.payload;
    default:
      return state;
  }
};

export const acSort = (sort) => {
  return {
    type: "SORT",
    payload: sort,
  };
};

export const reSortedProduct = (state = [], action) => {
  switch (action.type) {
    case "SORTEDPR":
      return action.payload;
    default:
      return state;
  }
};

export const acSortedProduct = (sortedProduct) => {
  return {
    type: "SORTEDPR",
    payload: sortedProduct,
  };
};