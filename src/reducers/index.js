import { combineReducers } from "redux";

import blocks from "./blocks";
import loading from "./loading";
import selectedBlock from "./selectedBlock";
import transactions from "./transactions";

export default combineReducers({
    blocks,
    loading,
    selectedBlock,
    transactions
});
