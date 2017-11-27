/**
 * Created by kien.lovan on 11/23/2017.
 */
import React, {Component} from 'react'
import {
    View, Text, TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {default as IconFontAwesome} from 'react-native-vector-icons/FontAwesome';
import {default as IconMat} from 'react-native-vector-icons/Ionicons';


export default class ItemMenu extends Component {

    constructor(props) {
        super(props)
    }

    onPress = ()=>{
        switch (this.props.title){
            case 'Đăng xuất':

                break;
        }
    }

    render() {
        return (
            <View
                style={{flex: 1, maxHeight: 50}}>
                <TouchableOpacity

                    onPress={this.onPress()}
                    style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <IconMat name={this.props.nameIcon} size={30} color="#ffffff"
                             style={{marginLeft: 10, marginRight: 10}}/>
                    <Text style={{flex: 1, fontSize: 20, fontWeight: 'bold', color: 'white'}}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }


}