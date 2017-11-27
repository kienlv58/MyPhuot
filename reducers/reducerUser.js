/**
 * Created by kien.lovan on 11/27/2017.
 */
import {LOGUOT, LOGIN} from '../actions/actionTypes';
const DEFAULT_STATE = {data: '', isLogin: false};

export default (state = DEFAULT_STATE, actions) => {
    switch (actions.type) {
        case LOGIN:
            return {...state, isLogin: true};
        case LOGUOT:
            return {...state, isLogin: false};
        default:
            return state;
    }
}