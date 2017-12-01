import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    AsyncStorage
} from 'react-native';
import firebase from '../../configs/firebaseconfig';
import {heightImage, sizeTextFlatList, sizeTextHome, widthImage} from '../../utils/Dimen';

export default class ServiceDetails extends Component {

    constructor(props){
        super (props);
        this.db = firebase.database();
        this.state = {
            array:[],
        }

        console.ignoredYellowBox = [
            'Setting a timer'
        ];
    }

    getData = async (placesKey) => {

        let a = await this.db.ref("trips").child('places').child(placesKey).child('services');
        a.on('value', (snapshot) => {
            var data = [];
            snapshot.forEach((itemChild) => {
                data.push({
                    icon: itemChild.val().icon,
                    name: itemChild.val().name,
                    key: itemChild.key
                });
            })
            this.setState({
                array: data
            });
        })
    };

    componentWillMount() {
        AsyncStorage.getItem('placesKey').then((value) => {
            this.getData(value)
        })
    }

    postItem = ({item}) => (
        <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('ServiceList', {key: item.key})}}>
            <View key={item.index} style={post.flat}>
                <Image
                    resizeMode="cover"
                    source={{uri: item.icon}}
                    style={post.image}
                >
                </Image>

                <View style={{
                    width: '100%',
                    marginRight: 5,
                    marginLeft: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>{item.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    render() {
        console.log("render component name")
        return (
            <View style={{flex: 1, backgroundColor:'white'}}>
                <FlatList
                    data={this.state.array}
                    renderItem={this.postItem}
                    numColumns={2}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const post = StyleSheet.create({
    image:{
        height: 68,
        width: 68,
    },
    flat: {
        flex: 1,
        height: heightImage,
        width: widthImage,
        marginTop: 10,
        marginBottom: 5,
        padding: 5,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});