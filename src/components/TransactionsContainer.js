import { connect } from "react-redux";

import * as actions from "../actions";

import {
    getSelectedBlock,
    getTransactions,
    isLoadingTxns
} from "../selectors";

import Transactions from "./Transactions";


const mapStateToProps = (state) => ({
    block: getSelectedBlock(state),
    isLoading: isLoadingTxns(state),
    transactions: getTransactions(state)
});

const mapDispatchToProps = dispatch => ({
    selectBlock(id) {
        dispatch(actions.reqSelectBlock(id));
    },
    getTransactions(idArr) {
        dispatch(actions.reqTxns(idArr));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Transactions);
