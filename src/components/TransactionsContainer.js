import { connect } from "react-redux";

import * as actions from "../actions";

import {
    getTransactions,
    isLoadingTxns
} from "../selectors";

import Transactions from "./Transactions";


const mapStateToProps = (state) => ({
    isLoading: isLoadingTxns(state),
    transactions: getTransactions(state)
});

const mapDispatchToProps = dispatch => ({
    selectBlock(block) {
        dispatch(actions.selectBlock(block));
    },
    getTransactions(idArr) {
        dispatch(actions.reqTxns(idArr));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Transactions);
