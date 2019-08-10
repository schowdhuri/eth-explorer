import { call, take, takeEvery, put } from "redux-saga/effects";

import { REQ_SELECT_BLOCK, RCV_BLOCK } from "../constants";
import { reqBlock, rcvSelectBlock } from "../actions";


function* selectBlock(action) {
    let { id } = action;
    
    yield put(reqBlock(id));
    const result = yield take(RCV_BLOCK);
    yield put(rcvSelectBlock(result.block.number));
}

export default function* () {
    yield takeEvery(REQ_SELECT_BLOCK, selectBlock);
};
