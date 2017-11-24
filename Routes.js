import React from 'react';
import {StackNavigator} from 'react-navigation';
import TouristAttraction from './component/TouristAttraction'
import Details from './component/Details'

export const RouteStack = StackNavigator({
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