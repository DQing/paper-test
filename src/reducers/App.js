export default (state = {
    paperList: [],
    count: 0,
    name: ""
}, action) => {
    switch (action.type) {
        case "ADD_BACK":
            state.paperList = action.paperList;
            return Object.assign({}, state);
        case "DELETE_BACK":
            state.paperList = action.paperList;
            return Object.assign({}, state);
        case "CHANGE_BACK":
            state.changeNameSuccess = true;
            return Object.assign({}, state);
        case "GET_NAME":
            let paper = state.paperList.find(paper => paper.id === action.id);
            state.name = paper.name;
            return Object.assign({}, state);
        case "GET_PAPERS_BACK":
            console.log('ffff');
            state.paperList = action.paperList;
            console.log('hhh');
            console.log('action paperList===', action);
            console.log('Object.assign({}, state)==', Object.assign({}, state));
            return Object.assign({}, state);
        default:
            return state;
    }
}