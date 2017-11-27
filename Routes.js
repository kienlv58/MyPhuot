import React from 'react';
import {
    StackNavigator,
    DrawerNavigator,
} from 'react-navigation';

import TouristAttraction from './component/TouristAttraction'
import Details from './component/Details'
import Home from './component/Home'
import SideBar from './component/SideBar';
import {widthMenu} from "./component/Dimen";
import PhuotNews from "./component/PhuotNews";

export const RouteStack = StackNavigator({

    Home: {
        screen: Home,
        header: navigation => ({
            style: {
                backgroundColor: '#00fa9a'
            }
        }),
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

export const SlideMenu = DrawerNavigator(
    {
        menu: {
            screen: RouteStack
        },
        TouristAttraction: {
            screen: TouristAttraction,
        },
        PhuotNews:{
            screen: PhuotNews,
        }
    },

    {
        drawerWidth: widthMenu,
        drawerPosition: "left",
        contentComponent: props => <SideBar {...props}/>

    },
);