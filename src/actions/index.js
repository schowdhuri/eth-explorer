import * as ACTIONS from "../constants";

export const reqLatestBlock = () => ({
    type: ACTIONS.REQ_LATEST_BLOCK
});

export const rcvLatestBlock = number => ({
    type: ACTIONS.RCV_LATEST_BLOCK,
    number
});

export const reqBlocks = (start, count=10) => ({
    type: ACTIONS.REQ_BLOCKS,
    start,
    count
});

export const rcvBlocks = blocks => ({
    type: ACTIONS.RCV_BLOCKS,
    blocks
});
