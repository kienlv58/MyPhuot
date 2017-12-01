import React from 'react';
import {
    StackNavigator,
    DrawerNavigator,
    TabNavigator
} from 'react-navigation';
import Home from './src/components/Home';
import TouristAttraction from './src/components/TouristAttraction';
import Details from './src/components/Details';
import SideBar from './src/components/SideBar';
import PostsDetails from './src/components/ScreenTabDetails/PostsDetails';
import ScheduleDetails from './src/components/ScreenTabDetails/ScheduleDetails';
import ServiceDetails from './src/components/ScreenTabDetails/ServiceDetails';
import {widthMenu} from "./src/utils/Dimen";
import PhuotNews from "./src/components/PhuotNews";
import Post from "./src/components/ScreenTabDetails/Post";
import ServiceList from "./src/components/ScreenTabDetails/ServiceList";

export const PostStack = StackNavigator({
    PostsDetails:{
        screen: PostsDetails,
    },
    Post: {
        screen: Post,
        navigationOptions:{
            title: 'Post'
        }
    }
},{
    headerMode: 'none'
})
export const ScheduleStack = StackNavigator({
    ScheduleDetails:{
        screen: ScheduleDetails,
    },
    Post: {
        screen: Post,
        navigationOptions:{
            title: 'Post'
        }
    }
},{
    headerMode: 'none'
})
export const ServiceStack = StackNavigator({
    PostsDetails:{
        screen: ServiceDetails,
    },
    ServiceList: {
        screen: ServiceList,
    }
},{
    headerMode: 'none'
})

export const TabBar = TabNavigator({
    PostsDetails:{
        screen: PostStack,
        navigationOptions: {
            tabBarLabel: 'Bài viết',
        }
    },
    ScheduleDetails:{
        screen: ScheduleStack,
        navigationOptions: {
            tabBarLabel: 'Lịch trình',
        }
    },
    ServiceDetails:{
        screen: ServiceStack,
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
    Tabbar: {
        screen: TabBar
    },
    PostsDetails: {
        screen: PostsDetails
    },
    Post:{
        screen: Post
    }
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

