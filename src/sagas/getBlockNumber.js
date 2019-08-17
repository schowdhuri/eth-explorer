import { call, put, takeEvery } from "redux-saga/effects";

import { REQ_LATEST_BLOCK } from "../constants/actions";
import { rcvLatestBlock } from "../actions";

import eth from "../utils/eth";


function* getBlockNumber() {
    const number = yield call(eth.getBlockNumber);
    yield put(rcvLatestBlock(number));
}

export default function* () {
    yield takeEvery(REQ_LATEST_BLOCK, getBlockNumber);
};
