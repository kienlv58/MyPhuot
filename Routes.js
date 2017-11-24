import React from 'react';
<<<<<<< HEAD
import {
    StackNavigator,
    DrawerNavigator,
} from 'react-navigation';
import {
    Image,
    TouchableOpacity,
} from 'react-native'
=======
import {StackNavigator} from 'react-navigation';
import Home from './component/Home'
>>>>>>> 0740ee7c5f00d27ec408c0e966977dcf4180da33
import TouristAttraction from './component/TouristAttraction'
import Details from './component/Details'
import Home from './component/Home'
import SideBar from './component/SideBar';

export const RouteStack = StackNavigator({
<<<<<<< HEAD
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
=======
    Home:{
        screen: Home,
        navigationOptions:{
            title: 'Home'
        }
    },
    TouristAttraction:{
>>>>>>> 0740ee7c5f00d27ec408c0e966977dcf4180da33
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