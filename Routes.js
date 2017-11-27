import React from 'react';
import {
    StackNavigator,
    DrawerNavigator,
    TabNavigator
} from 'react-navigation';
import {
    Image,
    TouchableOpacity,
} from 'react-native'
import Home from './component/Home'
import TouristAttraction from './component/TouristAttraction'
import Details from './component/Details'
import SideBar from './component/SideBar';
import PostsDetails from './component/ScreenTabDetails/PostsDetails'
import ScheduleDetails from './component/ScreenTabDetails/ScheduleDetails'
import ServiceDetails from './component/ScreenTabDetails/ServiceDetails'

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
    TouristAttraction:{
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

export const TabBar = TabNavigator({
    PostsDetails:{
        screen: PostsDetails,
        navigationOptions: {
            tabBarLabel: 'Bài viết',
        }
    },
    ScheduleDetails:{
        screen: ScheduleDetails,
        navigationOptions: {
            tabBarLabel: 'Lịch trình',
        }
    },
    ServiceDetails:{
        screen: ServiceDetails,
        navigationOptions: {
            tabBarLabel: 'Dịch vụ',
        }
    },
},{
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
        upperCaseLabel: false,
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        indicatorStyle: {
            backgroundColor: 'white'
        },
        labelStyle: {
            fontSize: 14,
        },
        style: {
            backgroundColor: 'deepskyblue',
        },
    }
});