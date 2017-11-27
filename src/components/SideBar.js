/**
 * Created by kien.lovan on 11/23/2017.
 */

import React, {Component} from 'react'
import {
    View, Text, StyleSheet, Image, ScrollView, TouchableOpacity
} from 'react-native';

import {FBLogin, FBLoginManager} from 'react-native-facebook-login';

import FastImage from 'react-native-fast-image'
import * as Colors from '../utils/Colors';
import ItemMenu from './ItemMenu'
import {sizeAvatar} from "../utils/Dimen";

export default class SideBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: false,

        }
    }

    getUserInfo = ()=>{
        console.log("state",this.state);
        var api = 'https://graph.facebook.com/v2.8/' + this.state.user.userId +
            '?fields=name,email&access_token=' + this.state.user.token;
        fetch(api)
            .then((response) => response.json())
            .then( (responseData) => {
                console.log('responseData',responseData)
                this.setState({profile:responseData});
            })
            .done();
    }

    render() {
        var _this = this;
      //  console.log("state",this.state);
        return (
            <ScrollView contentContainerStyle={{borderWidth: 0, flex: 1}}>
                <View style={styleHeader.header}>


                    <Image style={styleHeader.image}

                           source={{
                               uri: 'http://9mobi.vn/cf/images/2015/03/nkk/hinh-nen-1.jpg',

                           }}
                           resizeMode="cover"
                    >
                    </Image>

                    <View style={{
                        width: '100%',
                        height: '20%',
                        position: 'absolute',
                        backgroundColor: 'rgba(52, 52, 52, 0.2)',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image style={styleHeader.image_circle}

                               source={{
                                   uri: 'https://znews-photo-td.zadn.vn/w820/Uploaded/kcwvouvs/2017_04_18/15624155_1264609093595675_8005514290339512320_n.jpg',
                               }}
                               resizeMode="cover"
                        >
                        </Image>
                        {this.state.isLogin ?
                            <Text
                                style={{fontSize: 20, fontWeight: 'bold', marginTop: 5, color: 'white'}}>
                                {this.state.profile?this.state.profile.name:null}
                            </Text> : <FBLogin
                                style={{maxHeight: 40, borderRadius: 2}}
                                ref={(fbLogin) => { this.fbLogin = fbLogin }}
                                permissions={["email","user_friends"]}
                                loginBehavior={FBLoginManager.LoginBehaviors.Native}
                                onLogin={function(data){
                                    console.log("Logged in!");
                                    console.log(data);
                                    _this.setState({ user : data.credentials,profile:data.profile,isLogin:true});
                                }}
                                onLogout={function(){
                                    console.log("Logged out.");
                                    _this.setState({ user : null });
                                }}
                                onLoginFound={function(data){
                                    console.log("Existing login found.");
                                    console.log(data);
                                    _this.setState({ user : data.credentials,isLogin:true});
                                    _this.getUserInfo();
                                }}
                                onLoginNotFound={function(){
                                    console.log("No user logged in.");
                                    _this.setState({ user : null });
                                }}
                                onError={function(data){
                                    console.log("ERROR");
                                    console.log(data);
                                }}
                                onCancel={function(){
                                    console.log("User cancelled.");
                                }}
                                onPermissionsMissing={function(data){
                                    console.log("Check permissions!");
                                    console.log(data);
                                }}
                            />
                        }
                    </View>


                    <View style={{flex: 4, backgroundColor: Colors.background_color}}>
                        <ItemMenu action={()=>{this.props.navigation.navigate('TouristAttraction')}}
                                  title="Đội của tôi"
                                  nameIcon="ios-contacts"/>
                        <ItemMenu
                                  title="Quản lý đội"
                                  nameIcon="ios-people"/>
                        <ItemMenu title="lịch trình của tôi" nameIcon="ios-time"/>
                        <ItemMenu title="Địa điểm yêu thích" nameIcon="ios-heart"/>
                        <ItemMenu action={()=>{this.props.navigation.navigate('PhuotNews')}}
                            title="Tin tức phượt"
                                  nameIcon="ios-paper"/>
                        <ItemMenu title="Diễn đàn phượt" nameIcon="ios-chatbubbles"/>
                        <ItemMenu title="Đăng xuất" nameIcon="md-log-out" data={this.state}/>


                    </View>
                </View>
            </ScrollView>

        )
    }

}

const styleHeader = StyleSheet.create({
    header: {
        flex: 1,

    },
    image: {
        flex: 1,
        width: null,
        height: null,
    }
    , image_circle: {
        marginBottom: 5,
        height: sizeAvatar,
        width: sizeAvatar,
        borderRadius: 64
    },
});
