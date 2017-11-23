import React, {Component} from 'react'
import {
    FlatList,
    View, StyleSheet, Text
} from 'react-native';

import firebase from '../config/firebaseconfig'

export class TestFirebase extends Component {
    constructor(props) {
        super(props)
        this.db = firebase.database();
        this.state = {
            places: [{a: 1}, {a: 2}, {a: 3}],

        };

        console.ignoredYellowBox = [
            'Setting a timer'
        ];

    }

    //this is function get all place
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
                data.push(tempObj);
            })
            this.setState({places: data});

        })
    };

    componentWillMount() {
        this.getData()
    }


    eachItem = (data) => {
        return (
            <View key={data.index} style={{flex: 1}}>
                <Text>
                    {data.item.name}
                </Text>
            </View>
        )
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={this.state.places}
                    renderItem={this.eachItem}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }

}