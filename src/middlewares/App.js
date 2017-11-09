export default store => next => action => {
    if (action.type === "GET_PAPERS") {
        fetch('./api/getPaperList', {
            method: "get"
        }).then(response => {
            response.json().then((json) => {
                if (json.result) {
                    next({type: "GET_PAPERS_BACK", paperList: json.result});

                } else {
                    next({type: "GET_PAPERS_BACK_ERROR", paperList: json.exception});
                }
            });
        })

    } else if (action.type === "ADD_PAPER") {
        fetch('./api/paper', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Accept-Charset': 'utf-8'
            },
            body: JSON.stringify({
                "name": `test1`,
                "createTime": new Date().toLocaleDateString(),
                "creator": "douqing"
            })
        }).then(response => {
            response.json().then((json) => {
                if (json.result) {
                    next({type: "ADD_BACK", paperList: json.result});
                } else {
                    next({type: "ADD_BACK_ERROR", paperList: json.exception});
                }
            });
        })

    } else if (action.type === "DELETE_PAPER") {
        fetch(`./api/paper/${action.id}`, {
            method: "DELETE"
        }).then(response => {
            response.json().then((json) => {
                if (json.result) {
                    next({type: "DELETE_BACK", paperList: json.result});
                } else {
                    next({type: "DELETE_BACK_ERROR", paperList: json.exception});
                }
            });
        })
    } else if (action.type === "CHANGE_NAME") {
        fetch(`./api/updateName`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: action.id, name: action.name})
        }).then(res => {
            res.json().then(json => {
                if (json.result) {
                    next({type: "CHANGE_BACK"});
                } else {
                    next({type: "CHANGE_BACK_ERROR", paperList: json.exception});
                }
            })
        });
    }
    else {
        next(action);
    }
}