import * as ACTIONS from "../constants/actions";

const initialState = [];

export default (state=initialState, action) => {
    switch(action.type) {
        case ACTIONS.LOADING: {
            const index = state.findIndex(a => a == action.id);
            if(index == -1) {
                if(action.status) {
                    return [
                        ...state,
                        action.id
                    ];
                }
            } else if(!action.status) {
                return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
                ];
            }
            break;
        }
    }
    return state;
}
