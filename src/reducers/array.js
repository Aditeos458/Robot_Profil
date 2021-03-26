const arrayReducer = (state = [], action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'HALLO':
            return state + 1;
        case 'ARRAY':
            return state;
            default:
            return state;
    }

}

export default arrayReducer;