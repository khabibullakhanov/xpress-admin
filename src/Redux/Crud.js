const userDatas = JSON.parse(localStorage.getItem("userDatas") || "[]");

export const reUserCrud = (state = userDatas, action) => {
    switch (action.type) {
        case "ADD_CRUD":
            return [...state, action.payload];

        case "DELETE_CRUD":
            return state.filter((item) => item.id !== action.payload);


        case "UPDATE_CRUD":
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...action.payload };
                }
                return item;
            });

        default:
            return state;
    }
};



export const acUserAddCrud = (payload) => ({
    type: "ADD_CRUD",
    payload,
});

export const acUserDeleteCrud = (id) => ({
    type: "DELETE_CRUD",
    payload: id,
});

export const acUserUpdateCrud = (payload) => ({
    type: "UPDATE_CRUD",
    payload,
});