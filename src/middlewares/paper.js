export default store => next => action => {
    if (action.type === "SUBMIT") {
        fetch('./api/answers', {
            method: "post",
            body: JSON.stringify({
                // insertAnswer:
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Accept-Charset': 'utf-8'
            }
        }).then(response => {
            response.json().then((json) => {
                if (json.code === 200) {
                    next({type: "GET_PAPERS_BACK", paperList: json.data});
                } else {
                    next({type: "GET_PAPERS_BACK_ERROR", exception: json.exception});
                }
            });
        })

    }
    else {
        next(action);
    }
}