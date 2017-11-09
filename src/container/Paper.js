import {connect} from 'react-redux';
import PaperInfoPage from '../component/Paper';

const mapStateToProps = (state) => {
    return {
        name: state.papers.name
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPaperName: (id) => {
            dispatch({type: "GET_NAME", id});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaperInfoPage);