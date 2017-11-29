/**
 * Created by kien.lovan on 11/23/2017.
 */

import React, {Component, PropTypes} from 'react'
import {
    View, Text, StyleSheet, Image, ScrollView, TouchableOpacity
} from 'react-native';

import {FBLogin, FBLoginManager} from 'react-native-facebook-login';

import FastImage from 'react-native-fast-image'
import * as Colors from '../utils/Colors';
import ItemMenu from './ItemMenu'
import {sizeAvatar} from "../utils/Dimen";
import {connect} from 'react-redux'
import {login, logout} from '../actions/actionUser'

class SideBar extends Component {


    constructor(props) {
        super(props);
        this.state = {
            uriCover: 'http://9mobi.vn/cf/images/2015/03/nkk/hinh-nen-1.jpg',
            isLoaded: false
        }


    }

    getUriCover = (userId, token) => {
        fetch('https://graph.facebook.com/' + userId + '?fields=cover&access_token=' + token,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((res) => res.json()).then(res => {
            console.log("dt", res);
            this.setState({uriCover: res.cover.source, isLoaded: true})
        }).done();
    };

    getUserInfo = (user) => {

        var api = 'https://graph.facebook.com/v2.8/' + user.userId +
            '?fields=name,email&access_token=' + user.token;
        fetch(api)
            .then((response) => response.json())
            .then((responseData) => {
                this.props.Login(user, responseData);
            })
            .done();
    }


    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.mydata.isLogin && this.state.isLoaded == false) {

            this.getUriCover(nextProps.mydata.user.userId, nextProps.mydata.user.token);

        }
        return true;

    }

    render() {
        var _this = this;
        //  console.log("state",this.state);

        console.log("render----", this.props.mydata);
        return (
            <ScrollView contentContainerStyle={{borderWidth: 0, flex: 1}}>
                <View style={styleHeader.header}>


                    <Image style={styleHeader.image}
                           source={this.props.mydata.isLogin ? {
                               uri: this.state.uriCover
                           } : {
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

                               source={this.props.mydata.isLogin ? {
                                   uri: 'https://graph.facebook.com/' + this.props.mydata.user.userId + '/picture?type=large&w‌​idth=720&height=720'
                               } : {
                                   uri: 'https://znews-photo-td.zadn.vn/w820/Uploaded/kcwvouvs/2017_04_18/15624155_1264609093595675_8005514290339512320_n.jpg',
                               }}
                               resizeMode="cover"
                        >
                        </Image>
                        {this.props.mydata.isLogin ?
                            <Text
                                style={{fontSize: 20, fontWeight: 'bold', marginTop: 5, color: 'white'}}>

                                {this.props.mydata.profile ? this.props.mydata.profile.name : null}
                            </Text> : <FBLogin
                                style={{maxHeight: 40, borderRadius: 2}}
                                ref={(fbLogin) => {
                                    this.fbLogin = fbLogin
                                }}
                                permissions={["email", "user_friends"]}
                                loginBehavior={FBLoginManager.LoginBehaviors.Native}

                                onLogin={(data) => {
                                    console.log("Logged in!");
                                    console.log(data);
                                    this.props.Login(data.credentials, data.profile);
                                }}
                                onLogout={() => {
                                    console.log("Logged out.");
                                }}
                                onLoginFound={(data) => {
                                    console.log("Existing login found.");
                                    console.log(data);
                                    this.getUserInfo(data.credentials);
                                }}
                                onLoginNotFound={function () {
                                    console.log("No user logged in.");
                                }}
                                onError={function (data) {
                                    console.log("ERROR");
                                    console.log(data);
                                }}
                                onCancel={function () {
                                    console.log("User cancelled.");
                                }}
                                onPermissionsMissing={function (data) {
                                    console.log("Check permissions!");
                                    console.log(data);
                                }}
                            />
                        }
                    </View>


                    <View style={{flex: 4, backgroundColor: Colors.background_color}}>

                        <ItemMenu action={() => {
                            this.props.navigation.navigate('TouristAttraction')
                        }}
                                  title="Đội của tôi"
                                  nameIcon="ios-contacts"/>
                        <ItemMenu
                            title="Quản lý đội"
                            nameIcon="ios-people"/>
                        <ItemMenu title="lịch trình của tôi" nameIcon="ios-time"/>
                        <ItemMenu title="Địa điểm yêu thích" nameIcon="ios-heart"/>

                        <ItemMenu action={() => {
                            this.props.navigation.navigate('PhuotNews')
                        }}
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

function mapStateToProps(state, props) {

    const mydata = state.reducerUser;

    return {mydata}

}

const bindActionsToDispatch = (dispatch) => (
    {
        Login: (user, profile) => dispatch(login(user, profile)),

    }
);
export default connect(mapStateToProps, bindActionsToDispatch)(SideBar);

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
