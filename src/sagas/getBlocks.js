import { all, take, takeEvery, put } from "redux-saga/effects";

import { RCV_LATEST_BLOCK, REQ_BLOCKS } from "../constants/actions";
import { BLOCKS_PER_PAGE as PAGE_SIZE } from "../constants/pagination";
import { reqLatestBlock, rcvBlocks, setLoading } from "../actions";

import eth from "../utils/eth";
import cache from "../utils/BlockCache";


function* getBlocks(action) {
    let { start, count } = action;
    if(!count || count < 0)
        count = PAGE_SIZE;
    yield put(setLoading(REQ_BLOCKS, true));
    if(!start) {
        yield put(reqLatestBlock());
        const result = yield take(RCV_LATEST_BLOCK);
        start = result.number;
    }
    const pArr = [];
    while(--count >= 0) {
        const num = start - count; 
        if(cache.has(num))
            pArr.push(Promise.resolve(cache.get(num)));
        else
            pArr.push(eth.getBlock(start - count));
    }
    let blocks = yield all(pArr);
    
    blocks = blocks
        .filter(b => b)
        .sort((a, b) => a.number < b.number);
    blocks.forEach(b => cache.set(b.number, b));
    yield put(rcvBlocks(blocks, start));
    yield put(setLoading(REQ_BLOCKS, false));
}

export default function* () {
    yield takeEvery(REQ_BLOCKS, getBlocks);
}
