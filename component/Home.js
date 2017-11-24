import React, {Component} from 'react'
import {
    Image,
    Text,
    View,
    ScrollView,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ToolbarAndroid
} from 'react-native'

import ImageSlider from 'react-native-image-slider';
import firebase from '../config/firebaseconfig';
import SliderImage from './SliderImage';
import * as Colors from './Colors';
import {default as IconMat} from 'react-native-vector-icons/Ionicons';


export default class Home extends Component {

    static navigationOptions = ({navigation}) => {
        const {state} = navigation;
        return {
            title: 'Trang chủ',
            headerTintColor: Colors.background_color,
            headerLeft: <TouchableOpacity onPress={() => {
                navigation.navigate('DrawerOpen')
            }}>
                <IconMat name="ios-menu" size={30} color={Colors.background_color}
                         style={{marginLeft: 16, marginRight: 10}}/>
            </TouchableOpacity>
        }


    }
    constructor(props) {
        super(props);
        this.db = firebase.database();
        this.state = {
            mang: [],
            position: 0,
            interval: null
        }
    }

    loadList(db) {
        db.ref('trips').child('places').on('value', (snapshot) => {
            var data = [];
            snapshot.forEach((itemChild) => {
                data.push({
                    key: itemChild.key,
                    thumnail: itemChild.val().thumnail,
                    name: itemChild.val().name,
                });

            })
            this.setState({
                mang: data
            });
        })
    }

    //ITEM FLATLIST
    eachItem = ({item}) => (
        <View key={item.index} style={styles.flat}>
            <Image
                source={{uri: item.thumnail}}
                style={styles.styleimage}>
            </Image>

            <View style={{
                width: '90%',
                position: 'absolute',
                backgroundColor: 'rgba(52, 52, 52, 0.5)',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{fontSize: 18, color: 'white'}}> {item.name}</Text>
            </View>
        </View>
    );

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#009624'}}>
                <ScrollView>

                    <View style={styles.slider}>
                        <Text style={styles.stext}>
                            Hot Trend
                        </Text>
                        <SliderImage/>
                    </View>

                    <Text style={styles.stext}>
                        Top Việt Nam
                    </Text>

                    <View style={styles.styleview}>
                        <FlatList
                            data={this.state.mang}
                            renderItem={this.eachItem}
                            numColumns={2}
                            numRow={2}
                            keyExtractor={(item, index) => index}
                        />
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{flex: 1}}/>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={[styles.stext]}>
                                Xem thêm
                            </Text>
                            <Image source={require('../image/ic_right.png')}/>
                        </View>
                    </View>
                </ScrollView>
            </View>

        );
    }

    componentDidMount() {
        this.loadList(this.db);
    }
}

var styles = StyleSheet.create({
    toolbar: {
        height: 56,
    },

    slider: {
        flex: 2,
        backgroundColor: '#00c853',
        justifyContent: 'center'
    },

    stext: {
        color: '#ffffff',
        fontSize: 20,
        marginLeft: 16
    },
    styleview: {
        flex: 3,
        backgroundColor: '#ffffff'
    },
    styleview2: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    },

    styleimage: {
        margin: 5,
        height: 100,
        width: '90%',
        resizeMode: 'cover'
    },

    flat: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'ghostwhite'
    }


});