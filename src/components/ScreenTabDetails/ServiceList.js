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

export default class ServiceList extends Component {

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

        let a = await this.db.ref("trips").child('places').child(placesKey).child('services').child(this.props.navigation.state.params.key);
        a.on('value', (snapshot) => {
            var data = [];
            snapshot.forEach((itemChild) => {
                let tempObj = itemChild.val();
                tempObj.title;
                tempObj.description;
                tempObj.thumnail;
                data.push(tempObj);
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
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Post', {title: item.title,
            description: item.description, thumnail: item.thumnail})}}>
            <View key={item.index} style={post.flat}>
                <Image
                    resizeMode="cover"
                    source={{uri: item.thumnail}}
                    style={post.image}>
                </Image>

                <View style={{
                    width: '100%',
                    marginRight: 5,
                    marginLeft: 5,
                    position: 'absolute',
                    backgroundColor: 'rgba(52, 52, 52, 0.5)',
                }}>
                    <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>{item.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    render() {
        console.log("render component name")
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={this.state.array}
                    renderItem={this.postItem}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const post = StyleSheet.create({
    image:{
        height: 200,
        width: '100%',
    },
    flat:{
        flex: 1,
        marginTop: 10,
        marginBottom: 5,
        marginRight: 5,
        marginLeft: 5,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
    }
});