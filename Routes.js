import React from 'react';
import {StackNavigator} from 'react-navigation';
import Home from './component/Home'
import TouristAttraction from './component/TouristAttraction'
import Details from './component/Details'

export const RouteStack = StackNavigator({
    Home:{
        screen: Home,
        navigationOptions:{
            title: 'Home'
        }
    },
    TouristAttraction:{
        screen: TouristAttraction,
        navigationOptions:{
            title: 'Tourist Attraction'
        }
    },
    Details:{
        screen: Details,
        navigationOptions: {
            title: 'Details'
        }
    },
})