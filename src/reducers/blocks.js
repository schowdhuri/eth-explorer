import * as ACTIONS from "../constants/actions";

const initialState = [];

export default (state=initialState, action) => {
    switch(action.type) {
        case ACTIONS.RCV_BLOCKS: {
            if(!action.start)
                return action.blocks;
            const index = state.findIndex(b => b.number == action.start+1);
            if(index == -1)
                return action.blocks;
            return [
                ...state.slice(0, index + 1),
                ...action.blocks
            ];
        }

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
