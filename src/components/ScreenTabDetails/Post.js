import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Post extends Component {
    render() {
        console.log("render component name")
        return (
            <Text>Post Screen</Text>
        );
    }
}