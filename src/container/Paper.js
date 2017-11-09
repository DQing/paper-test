import {connect} from 'react-redux';
import Paper from '../component/Paper';

const mapStateToProps = (state) => {
    return {
        paper: state.papers.paper
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (insertAnswer) => {
            dispatch({type: "SUBMIT",insertAnswer});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Paper);