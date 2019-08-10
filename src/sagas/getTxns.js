import { all, take, takeEvery, put } from "redux-saga/effects";

import { REQ_TXNS } from "../constants";
import { rcvTxns } from "../actions";

import eth from "../utils/eth";


function* getTxns(action) {
    let { idArr } = action;
    const pArr = idArr.map(id => eth.getTransaction(id));
    const result = yield all(pArr);
    const txns = result.reduce((acc, cur) => ({
        ...acc,
        [cur.hash]: cur
    }), {});
    yield put(rcvTxns(txns));
}

export default function* () {
    yield takeEvery(REQ_TXNS, getTxns);
};
