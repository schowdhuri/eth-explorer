import * as ACTIONS from "../constants";

const initialState = null;

export default (state=initialState, action) => {
    switch(action.type) {
        case ACTIONS.RCV_SELECT_BLOCK:
            return action.block;
    }
    return state;
}
