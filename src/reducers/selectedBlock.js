import * as ACTIONS from "../constants/actions";

const initialState = null;

export default (state=initialState, action) => {
    switch(action.type) {
        case ACTIONS.SELECT_BLOCK:
            return action.block;
    }
    return state;
}
