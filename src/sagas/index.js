import { fork } from "redux-saga/effects";

import getBlockNumber from "./getBlockNumber";
import getBlocks from "./getBlocks";

export default function* () {
    yield fork(getBlockNumber);
    yield fork(getBlocks);
};
