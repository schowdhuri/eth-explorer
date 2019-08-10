import { connect } from "react-redux";

import * as actions from "../actions";

import { getBlocks } from "../selectors";

import Dashboard from "./Dashboard";


const mapStateToProps = state => ({
    blocks: getBlocks(state)
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
