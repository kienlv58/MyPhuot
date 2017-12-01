import React, {Component} from 'react'
import {
    Image,
    Text,
    View,
    ScrollView,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'

import firebase from '../configs/firebaseconfig'
import * as Colors from '../utils/Colors';
import {default as IconMat} from 'react-native-vector-icons/Ionicons';
import Slide from './Slide';
import {heightImage, sizeTextFlatList, sizeTextHome, widthImage} from '../utils/Dimen';


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
            anh: [],
            position: 0,
            interval: null
        }

        console.ignoredYellowBox = [
            'Setting a timer'
        ];
    }

    listenForItems(db) {
        var items = [];
        db.ref('hot trends').on('child_added', (dataSnapshot) => {
            items.push(dataSnapshot.val());
            this.setState({
                anh: items
            });
        })
    }

    getData = async () => {

        let a = await this.db.ref("trips").child('places');
        a.on('value', (snapshot) => {
            var data = [];
            snapshot.forEach((itemChild) => {
                let tempObj = itemChild.val();
                tempObj.images_slide = [];
                itemChild.child('images_slide').forEach((img) => {
                    tempObj.images_slide.push(img.val());
                });
                if (data.length<6) {
                    data.push({
                        thumnail: itemChild.val().thumnail,
                        name: itemChild.val().name,
                        adress: itemChild.val().adress,
                        short_desc: itemChild.val().short_desc,
                        images_slide: tempObj.images_slide,
                        key: itemChild.key,
                        rate: itemChild.val().rate
                    })
                }
            })
            this.setState({
                    mang: data
                }
            );
        })
    };

    componentWillMount() {
        this.getData()
        this.listenForItems(this.db)
    }


    //ITEM FLATLIST
    eachItem = ({item}) => (
        <TouchableOpacity onPress={() => {
            AsyncStorage.setItem('placesKey', item.key)
            this.props.navigation.navigate('Details', {
                name: item.name,
                rate: item.rate,
                short_desc: item.short_desc, images_slide: item.images_slide, acticle: item.acticle
            })
        }}>
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
                    <Text style={{fontSize: sizeTextFlatList, color: 'white'}}> {item.name}</Text>
                </View>
            </View>
        </TouchableOpacity>

    );

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#009624'}}>
                <ScrollView>

                    <View style={styles.slider}>
                        <View style={{justifyContent: 'center'}}>
                            <Text style={styles.stext}>
                                Hot Trend
                            </Text>
                        </View>
                        <Slide array={this.state.anh}/>
                    </View>

                    <Text style={styles.stext}>
                        Top Việt Nam
                    </Text>

                    <View style={styles.styleview}>
                        <FlatList
                            data={this.state.mang}
                            renderItem={this.eachItem}
                            numColumns={2}
                            keyExtractor={(item, index) => index}
                        />
                    </View>
                </ScrollView>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('TouristAttraction')
                    }} style={{flexDirection: 'row'}}>
                        <View style={{flexDirection:'row', alignItems:'center',
                            justifyContent:'center'}}>
                        <Text style={styles.stext}>Xem thêm</Text>
                        <Image style={{marginTop:5}} source={require('../images/ic_right.png')}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

var styles = StyleSheet.create({
    toolbar: {
        height: 56,
    },

    slider: {
        flex: 2,
        justifyContent: 'center'
    },

    stext: {
        color: '#ffffff',
        fontSize: sizeTextHome,
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
        height: heightImage,
        width: '90%',
    },

    flat: {
        flex: 1,
        height: heightImage,
        width: widthImage,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'ghostwhite'
    }
})