import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    Image,
    StyleSheet
} from 'react-native';
import firebase from '../../configs/firebaseconfig';

export default class Post extends Component {

    constructor(props){
        super (props);
        this.db = firebase.database();

        console.ignoredYellowBox = [
            'Setting a timer'
        ];
    }

    render() {
        console.log("render component name")
        return (
            <ScrollView contentContainerStyle={{borderWidth: 0, width: '100%', height: '950%'}}>
                <View style={{flex: 1, margin: 5}}>
                    <Image source={{uri: this.props.navigation.state.params.thumnail}} style={post.image}/>
                    <Text style={post.textTitle}>{this.props.navigation.state.params.title}</Text>
                    <Text style={{fontSize: 18, marginTop: 5}}>{this.props.navigation.state.params.description}</Text>
                </View>
            </ScrollView>
        );
    }
}
const post = StyleSheet.create({

    image:{
        height: 200,
        width: '100%',
    },
    textTitle:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'red',
        marginTop: 5
    }
});