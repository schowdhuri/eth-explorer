import { connect } from "react-redux";

import * as actions from "../actions";

import { getBlocks, isLoadingBlocks } from "../selectors";

import Dashboard from "./Dashboard";


const mapStateToProps = state => ({
    blocks: getBlocks(state),
    isLoading: isLoadingBlocks(state)
});

const mapDispatchToProps = dispatch => ({
    getBlocks(start=0) {
        dispatch(actions.reqBlocks(start));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
