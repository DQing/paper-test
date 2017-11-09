export default (state = {
    paperList: [],
    count: 0,
    name: "",
    error_msg: ""
}, action) => {
    switch (action.type) {
        case "ADD_BACK":
            state.paperList = action.paperList;
            return Object.assign({}, state);
        case "ADD_BACK_ERROR":
            state.error_msg = action.exception;
            return Object.assign({}, state);
        case "DELETE_BACK":
            state.paperList = action.paperList;
            return Object.assign({}, state);
        case "DELETE_BACK_ERROR":
            state.error_msg = action.exception;
            return Object.assign({}, state);
        case "CHANGE_BACK":
            state.changeNameSuccess = true;
            return Object.assign({}, state);
        case "CHANGE_BACK_ERROR":
            state.error_msg = action.exception;
            return Object.assign({}, state);
        case "GET_NAME":
            let paper = state.paperList.find(paper => paper.id === action.id);
            state.name = paper.name;
            return Object.assign({}, state);
        case "GET_PAPERS_BACK":
            state.paperList = action.paperList;
            return Object.assign({}, state);
        case "GET_PAPERS_BACK_ERROR":
            state.error_msg = action.exception;
            return Object.assign({}, state);
        default:
            return state;
    }
}