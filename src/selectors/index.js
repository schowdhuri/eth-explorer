import { createSelector } from "reselect";

import * as  ACTIONS from "../constants/actions";

export const getBlocks = state => state.blocks;

export const getSelectedBlock = state => state.selectedBlock;

const getAllTransactions = state => state.transactions;

export const getTransactions = createSelector(
    [ getAllTransactions, getSelectedBlock ],
    (txns, block) => {
        return block &&
            block.transactions &&
            block.transactions
                .map(id => txns[id])
                .filter(txn => txn) ||
            [];
    }
);

const getLoadingQ = state => state.loading;

export const isLoadingTxns = createSelector(
    getLoadingQ,
    loadingQ => Boolean(loadingQ.find(a => a==ACTIONS.REQ_TXNS))
);

export const isLoadingBlocks = createSelector(
    getLoadingQ,
    loadingQ => Boolean(loadingQ.find(a => a==ACTIONS.REQ_BLOCKS))
);