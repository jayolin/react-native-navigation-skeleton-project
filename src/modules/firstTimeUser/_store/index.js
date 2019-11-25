import state from './state'
import * as types from "../../../store/types"
const initialState = state;
//some other functions perhaps
const firstTime = (state = initialState, action) => {
    //switch action.type
    switch(action.type){
        case types.SET_FIRST_TIME_USER_ACTION:

            return {
                ...state,
                firstTimeUser: action.value
            };

            break
    }

    return state
};
export default firstTime
