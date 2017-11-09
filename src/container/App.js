import {connect} from 'react-redux';
import App from '../component/App';

const mapStateToProps = (state) => {
    return {
        paperList: state.papers.paperList,
        error_msg: state.papers.error_msg,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: () => {
            dispatch({type: "ADD_PAPER"})
        },
        onDelete: (key) => {
            dispatch({type: "DELETE_PAPER", id: key});
        },
        cellChange: (id, name) => {
            dispatch({type: "CHANGE_NAME", id, name});
        },
        getPaperList: () => {
            dispatch({type: "GET_PAPERS"});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);