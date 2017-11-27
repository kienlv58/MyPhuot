import React from 'react';
import {StackNavigator} from 'react-navigation';
import Details from './component/Details'

import TouristAttraction from './component/TouristAttraction';
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