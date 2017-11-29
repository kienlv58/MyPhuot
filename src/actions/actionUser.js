/**
 * Created by kien.lovan on 11/27/2017.
 */
import {LOGIN, LOGUOT} from '../actions/actionTypes';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
export function login(user, profile) {
    return {
        type: LOGIN,
        user: user,
        profile: profile
    }
}
export function logout() {
    FBLoginManager.logout((data)=>{
        console.log("data logout",data);
    });
    return {
        type: LOGUOT,
    }
}
