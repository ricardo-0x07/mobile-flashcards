import { 
    DECK_UPDATE,
    DECK_CREATE,
    DECK_SAVED_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    title: '',
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case DECK_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value};
        case DECK_CREATE:
            return state;
        case DECK_SAVED_SUCCESS:
            return state;        
        default:
            return state;
    }
};
