export const reOpenModal = (state = false, action) => {
    switch (action.type) {
        case "EDITMODAL":
            return action.paylod;
        default:
            return state;
    }
};

export const acOpenModal = (paylod) => {
    return {
        type: "EDITMODAL",
        paylod,
    };
};