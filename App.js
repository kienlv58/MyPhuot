import React, {Component} from 'react';
import {
    View
} from 'react-native';

import SlideMenu from './Routes';
import {Provider} from 'react-redux';
import store from './src/configs/configStore'
export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <SlideMenu/>
                </View>
            </Provider>
        );
    }
}


