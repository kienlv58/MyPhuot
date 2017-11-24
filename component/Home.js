import React, {Component} from 'react'
import {
    Image,
    Text,
    View,
    ScrollView,
    StyleSheet,
    Animated,
    PanResponder,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
    FlatList,
    ToolbarAndroid
} from 'react-native'

import ImageSlider from 'react-native-image-slider';
import firebase from '../config/firebaseconfig'


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.db = firebase.database();
        this.state = {
            mang: [
                {key:'',img: 'https://cdn3.ivivu.com/2014/10/du-lich-sa-pa-cam-nang-tu-a-den-z-iVIVU.com-1-1024x681.jpg'},
                {key:'',img: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Bi%E1%BB%83n_S%E1%BA%A7m_S%C6%A1n_2015.jpg'},
                {key:'',img: 'https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/34043/SITours/bai-dinh-pagoda-and-trang-an-eco-tourism-complex-day-trip-from-hanoi-in-hanoi-353429.jpg'},
                {key:'',img: 'https://travel.com.vn/Images/destination/tf_160203_Ha_Long_-_vnh.jpg'},
            ],
            anh: [
                'https://upload.wikimedia.org/wikipedia/commons/b/b8/Bi%E1%BB%83n_S%E1%BA%A7m_S%C6%A1n_2015.jpg',
                'https://travel.com.vn/Images/destination/tf_160203_Ha_Long_-_vnh.jpg',
                'https://cdn3.ivivu.com/2014/10/du-lich-sa-pa-cam-nang-tu-a-den-z-iVIVU.com-1-1024x681.jpg'
            ],
            position: 0,
            interval: null
        }
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
            }, 4000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#009624'}}>
                <ToolbarAndroid
                    logo={require('../image/menu.png')}
                    style={styles.toolbar}/>
                <ScrollView>
                    <View style={styles.slider}>
                        <Text style={styles.stext}>
                            Hot Trend
                        </Text>
                        <ImageSlider
                            images={this.state.anh}
                            position={this.state.position}
                            onPositionChanged={position => this.setState({position})}/>
                    </View>

                    <Text style={styles.stext}>
                        Top Việt Nam
                    </Text>

                    <View style={styles.styleview}>
                        <FlatList
                            data={this.state.mang}
                            renderItem={({item}) =>
                                <View style={styles.flat}>
                                    <Image
                                        source={{uri: item.img}}
                                        style={styles.styleimage}>
                                    </Image>
                                    <Text> {item.img}</Text>
                                </View>
                            }
                            numColumns={2}
                            numRow={2}
                        />
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{flex: 1}}/>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.stext}>
                                Xem thêm
                            </Text>
                            <Image source={require('../image/ic_right.png')}/>
                        </View>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

var styles = StyleSheet.create({
    toolbar: {
        height: 56,
        backgroundColor: '#00c853',
    },

    slider: {
        flex: 2,
        backgroundColor: '#009624',
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
        flex: 1,
        margin: 50
    },

    flat: {
        borderBottomWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1
    }


});