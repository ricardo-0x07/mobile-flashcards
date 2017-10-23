import { 
    CARD_UPDATE,
    CARD_CREATE,
    CARD_SAVED_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    question: '',
    answer: ''
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case CARD_UPDATE:
            return {...state, [action.payload.prop]: action.payload. value};
        case CARD_CREATE:
            return INITIAL_STATE;
        case CARD_SAVED_SUCCESS:
            return INITIAL_STATE;        
        default:
            return state;
    }
};
