import { fork } from "redux-saga/effects";

import getBlockNumber from "./getBlockNumber";
import getBlock from "./getBlock";
import getBlocks from "./getBlocks";
import getTxns from "./getTxns";


export default function* () {
    yield fork(getBlockNumber);
    yield fork(getBlock);
    yield fork(getBlocks);
    yield fork(getTxns);
};
