import React from 'react';
import {
    StackNavigator,
    DrawerNavigator,
    TabNavigator
} from 'react-navigation';
import Home from './Component/Home'
import TouristAttraction from './Component/TouristAttraction'
import Details from './Component/Details'
import SideBar from './Component/SideBar';
import PostsDetails from './Component/ScreenTabDetails/PostsDetails'
import ScheduleDetails from './Component/ScreenTabDetails/ScheduleDetails'
import ServiceDetails from './Component/ScreenTabDetails/ServiceDetails'
import {widthMenu} from "./Component/Dimen";
import PhuotNews from "./Component/PhuotNews";

export const RouteStack = StackNavigator({
    Home: {
        screen: Home,
        header: navigation => ({
            style: {
                backgroundColor: '#00fa9a'
            }
        }),
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

export default SlideMenu = DrawerNavigator(
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