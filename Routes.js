import React from 'react';
import {
    StackNavigator,
    DrawerNavigator,
} from 'react-navigation';

import TouristAttraction from './component/TouristAttraction'
import Details from './component/Details'
import Home from './component/Home'
import SideBar from './component/SideBar';

export const RouteStack = StackNavigator({
    Home: {
        screen: Home,
        header: navigation => ({
            style: {
                backgroundColor: '#00fa9a'
            }
        }),
        // navigationOptions: {
        //
        // }
    },


    TouristAttraction: {
        screen: TouristAttraction,
        navigationOptions: {
            title: 'Tourist Attraction'
        }
    },
    Details: {
        screen: Details,
        navigationOptions: {
            title: 'Details'
        }
    },
})

export const SlideMenu = DrawerNavigator({
        menu: {
            screen: RouteStack
        },
    },
    {
        drawerWidth: 300,
        drawerPosition: "left",
        contentComponent: props => <SideBar {...props}/>

    },
);