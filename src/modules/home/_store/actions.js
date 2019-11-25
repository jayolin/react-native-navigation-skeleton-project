import * as types from '../../../store/types';

export function logout () {
    return {
        type: types.LOG_USER_OUT_ACTION,
        value: null //hard-coded access token
    }
}
