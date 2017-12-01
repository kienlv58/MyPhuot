/**
 * Created by kien.lovan on 11/23/2017.
 */
import React, {Component} from 'react'
import {
    View, Text, TouchableOpacity, Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {default as IconFontAwesome} from 'react-native-vector-icons/FontAwesome';
import {default as IconMat} from 'react-native-vector-icons/Ionicons';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import {connect} from 'react-redux';
import {logout} from '../actions/actionUser'

class ItemMenu extends Component {
    static navigationOptions = ({navigation}) => {

    }

    constructor(props) {
        super(props)
    }

    onPress = () => {
        if (this.props.isLogin)
            this.props.Logout();

    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    onClick() {
        switch (this.props.title) {
            case 'Đăng xuất':
                return this.onPress()
                break;
            default:
                return this.props.action;
                break;
        }
        /*if (this.props.title=='Đăng xuất'){
            return this.onPress()
        } else {
            return this.props.action;
        }*/
    }

    render() {
        return (
            <View
                style={{flex: 1, maxHeight: 50}}>
                <TouchableOpacity
                    onPress={this.onClick()}
                    style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <IconMat name={this.props.nameIcon} size={30} color="green"
                             style={{marginLeft: 10, marginRight: 10}}/>
                    <Text style={{flex: 1, fontSize: 20, fontWeight: 'bold', color: 'green'}}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        isLogin: state.reducerUser.isLogin
    }
};
const bindActionsToDispatch = (dispatch) => {
    return {
        Logout: () => dispatch(logout())
    }
};

export default connect(mapStateToProps, bindActionsToDispatch)(ItemMenu);