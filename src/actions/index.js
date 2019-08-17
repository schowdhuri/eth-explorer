import * as ACTIONS from "../constants/actions";

export const reqLatestBlock = () => ({
    type: ACTIONS.REQ_LATEST_BLOCK
});

export const rcvLatestBlock = number => ({
    type: ACTIONS.RCV_LATEST_BLOCK,
    number
});

export const reqBlock = id => ({
    type: ACTIONS.REQ_BLOCK,
    id
});

export const rcvBlock = block => ({
    type: ACTIONS.RCV_BLOCK,
    block
});

export const reqBlocks = (start=0, count=10) => ({
    type: ACTIONS.REQ_BLOCKS,
    start,
    count
});

export const rcvBlocks = (blocks, start) => ({
    type: ACTIONS.RCV_BLOCKS,
    blocks,
    start
});

export const selectBlock = block => ({
    type: ACTIONS.SELECT_BLOCK,
    block
});

export const reqTxns = idArr => ({
    type: ACTIONS.REQ_TXNS,
    idArr
});

export const rcvTxns = transactions => ({
    type: ACTIONS.RCV_TXNS,
    transactions
});

export const setLoading = (id, status) => ({
    type: ACTIONS.LOADING,
    id,
    status
});
