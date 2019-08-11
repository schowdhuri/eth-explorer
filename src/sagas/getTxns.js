import { all, take, takeEvery, put } from "redux-saga/effects";

import { REQ_TXNS } from "../constants";
import { rcvTxns, setLoading } from "../actions";

import eth from "../utils/eth";


function* getTxns(action) {
    let { idArr } = action;
    yield put(setLoading(REQ_TXNS, true));
    const pArr = idArr.map(id => {
        return eth.getTransaction(id);
    });
    const result = yield all(pArr);
    // console.log(result);
    const txns = result.reduce((acc, cur) => {
        if(cur)
            return {
                ...acc,
                [cur.hash]: cur
            };
        else
            return acc;
        }, {});
    yield put(rcvTxns(txns));
    yield put(setLoading(REQ_TXNS, false));
}

export default function* () {
    yield takeEvery(REQ_TXNS, getTxns);
};
