import * as ACTIONS from "../constants";

const initialState = [];

export default (state=initialState, action) => {
    switch(action.type) {
        case ACTIONS.RCV_BLOCKS:
            return action.blocks;

        case ACTIONS.RCV_BLOCK: {
            if(state.find(b => b.number == action.block.number))
                break;
            return [
                ...state,
                action.block
            ];
        }

    }
    return state;
};
