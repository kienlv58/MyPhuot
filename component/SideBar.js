/**
 * Created by kien.lovan on 11/23/2017.
 */

import React, {Component} from 'react'
import {
    View, Text, StyleSheet, Image, ScrollView
} from 'react-native';

import FastImage from 'react-native-fast-image'
import * as Colors from '../component/colors';
import ItemMenu from '../component/ItemMenu'
export default class SideBar extends Component {

    render() {
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
                        <Text
                            style={{fontSize: 30, fontWeight: 'bold', marginTop: 5, color: 'white'}}
                        >Lo Van Kien</Text>
                    </View>

                    <View style={{flex: 4, backgroundColor: Colors.background_color}}>
                        <ItemMenu title="Đội của tôi" nameIcon="ios-contacts"/>
                        <ItemMenu title="Quản lý đội" nameIcon="ios-people"/>
                        <ItemMenu title="lịch trình của tôi" nameIcon="ios-time"/>
                        <ItemMenu title="Địa điểm yêu thích" nameIcon="ios-heart"/>
                        <ItemMenu title="Tin tức phượt" nameIcon="ios-paper"/>
                        <ItemMenu title="Diễn đàn phượt" nameIcon="ios-chatbubbles"/>
                        <ItemMenu title="Đăng xuất" nameIcon="md-log-out"/>


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
        height: 128,
        width: 128,
        borderRadius: 64
    },
});
