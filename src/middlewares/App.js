export default store => next => action => {
    if (action.type === "GET_PAPERS") {
        fetch('./api/papers', {
            method: "get"
        }).then(response => {
            response.json().then((json) => {
                if (json.code === 200) {
                    next({type: "GET_PAPERS_BACK", paperList: json.data});
                } else {
                    next({type: "GET_PAPERS_BACK_ERROR", exception: json.exception});
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
                console.log(json);
                if (json.code === 200) {
                    store.dispatch({type: "GET_PAPERS"});
                } else {
                    next({type: "ADD_BACK_ERROR", exception: json.exception});
                }
            });
        })

    } else if (action.type === "DELETE_PAPER") {
        fetch(`./api/paper/${action.id}`, {
            method: "DELETE"
        }).then(response => {
            response.json().then((json) => {
                if (json.code === 200) {
                    store.dispatch({type: "GET_PAPERS"});
                } else {
                    next({type: "DELETE_BACK_ERROR", exception: json.exception});
                }
            });
        })
    } else if (action.type === "CHANGE_NAME") {
        fetch(`./api/paper`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: action.id, name: action.name})
        }).then(res => {
            res.json().then(json => {
                console.log('eee=', json);
                if (json.code === 200) {
                    next({type: 'CHANGE_BACK', paperList: json.data})
                } else {
                    next({type: 'CHANGE_BACK', paperList: json.data});
                    // next({type: "CHANGE_BACK_ERROR", exception: json.exception});
                }
                // store.dispatch({type: "GET_PAPERS"});

            })
        });
    }
    else {
        next(action);
    }
}