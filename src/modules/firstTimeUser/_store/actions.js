
import * as types from "../../../store/types"

export function completeFirstTimeSurvey(){
    return {
        type: types.SET_FIRST_TIME_USER_ACTION,
        value: false
    }
}
