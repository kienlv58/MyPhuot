import React, {Component} from 'react'
import {
    View,
    ScrollView,
    Text
} from 'react-native'

import ImageSlider from 'react-native-image-slider';
import firebase from '../config/firebaseconfig';

export default class SliderImage extends Component{
    constructor(props) {
        super(props);
        this.db = firebase.database();
        this.state = {
            anh: [],
            position: 0,
            interval: null
        };
    }

    componentWillMount() {
        this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 4000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
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

    render() {
        return (
            <View >
                <Text></Text>
                <ScrollView>
                <ImageSlider
                    images={this.state.anh}
                    position={this.state.position}
                    onPositionChanged={position => this.setState({position})}/>
                </ScrollView>
            </View>
        );
    }

    componentDidMount() {
        this.listenForItems(this.db);
    }
}