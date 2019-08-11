import { createSelector } from "reselect";

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
    (txns, block) => block &&
        block.transactions &&
        block.transactions
            .map(id => txns[id])
            .filter(txn => txn) ||
        []
);