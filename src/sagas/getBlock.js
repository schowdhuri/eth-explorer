import { call, takeEvery, put } from "redux-saga/effects";

import { REQ_BLOCK } from "../constants/actions";
import { rcvBlock } from "../actions";

import eth from "../utils/eth";
import cache from "../utils/BlockCache";


function* getBlock(action) {
    let { id } = action;
    
    if(cache.has(id)) {
        yield rcvBlock(cache.get(id));
    } else {
        const block = yield call(eth.getBlock, id);
        cache.set(block.number, block);
        yield put(rcvBlock(block));
    }
}

export default function* () {
    yield takeEvery(REQ_BLOCK, getBlock);
};
