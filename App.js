import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import SlideMenu from './Routes';
export default class App extends Component<{}> {
    render() {
        return (
            <View style={{flex: 1}}>
                <SlideMenu/>
            </View>
        );
    }
}


