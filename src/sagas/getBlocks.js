import { all, take, takeEvery, put } from "redux-saga/effects";

import { RCV_LATEST_BLOCK, REQ_BLOCKS } from "../constants";
import { reqLatestBlock, rcvBlocks } from "../actions";

import eth from "../utils/eth";


function* getBlocks(action) {
    let { start, count } = action;
    if(!count || count < 0)
        count = 10;
    if(!start) {
        yield put(reqLatestBlock());
        const result = yield take(RCV_LATEST_BLOCK);
        start = result.number;
    }
    const pArr = [];
    while(--count >= 0) {
        pArr.push(eth.getBlock(start - count));
    }
    const blocks = yield all(pArr);
    yield put(rcvBlocks(blocks));
}

export default function* () {
    yield takeEvery(REQ_BLOCKS, getBlocks);
};
