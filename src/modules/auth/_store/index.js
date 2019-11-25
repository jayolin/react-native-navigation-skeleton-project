import state from './state'
import * as types from "../../../store/types"
const initialState = state;
//some other functions perhaps
const auth = (state = initialState, action) => {
    //switch action.type
    switch(action.type){
        case types.SIGN_USER_IN_ACTION:

            return {
                ...state,
                accessToken: action.value
            };

            break;

        case types.LOG_USER_OUT_ACTION:

            return {
                ...state,
                accessToken: action.value
            };

            break
    }

    return state
};
export default auth
