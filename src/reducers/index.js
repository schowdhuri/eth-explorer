import { combineReducers } from "redux";

import blocks from "./blocks";
import selectedBlock from "./selectedBlock";
import transactions from "./transactions";

export default combineReducers({
    blocks,
    selectedBlock,
    transactions
});
