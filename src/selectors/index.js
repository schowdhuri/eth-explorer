import { createSelector } from "reselect";

import * as  ACTIONS from "../constants";

export const getBlocks = state => state.blocks
    .filter(b => b)
    .sort((a, b) => a.number < b.number);

const getSelectedBlockId = state => state.selectedBlock;

export const getSelectedBlock = createSelector(
    [ getBlocks, getSelectedBlockId],
    (blocks, id) => blocks.find(b => b.number == id)
);

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
    loadingQ => loadingQ.find(a => a==ACTIONS.REQ_TXNS)
);

export const isLoadingBlocks = createSelector(
    getLoadingQ,
    loadingQ => loadingQ.find(a => a==ACTIONS.REQ_BLOCKS)
);