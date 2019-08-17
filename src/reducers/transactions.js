import * as ACTIONS from "../constants/actions";

const initialState = {};

export default (state=initialState, action) => {
    switch(action.type) {
        case ACTIONS.RCV_TXNS:
            return {
                ...state,
                ...action.transactions
            };
    }
    return state;
}
