/**
 * Created by kien.lovan on 11/27/2017.
 */
import {LOGIN,LOGUOT} from 'actionTypes';

export function login() {
    return{
        type:LOGIN,
        payload:''
    }
}
export function logout() {
    return{
        type:LOGUOT,
        payload:''
    }
}
