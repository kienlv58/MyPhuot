import React from 'react';
import {
    StackNavigator,
    DrawerNavigator,
    TabNavigator
} from 'react-navigation';
import Home from './component/Home'
import TouristAttraction from './component/TouristAttraction'
import Details from './component/Details'
import SideBar from './component/SideBar';
import PostsDetails from './component/ScreenTabDetails/PostsDetails'
import ScheduleDetails from './component/ScreenTabDetails/ScheduleDetails'
import ServiceDetails from './component/ScreenTabDetails/ServiceDetails'
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