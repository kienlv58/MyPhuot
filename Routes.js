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

import MyTeam from "./src/components/MyTeam";
import {GroupStack} from "./src/components/RouterGroup";
import TeamManagement from "./src/components/TeamManagement";
import AddGroup from "./src/components/AddGroup";
import ReadNews from "./src/components/ReadNews";

import Post from "./src/components/ScreenTabDetails/Post";


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

    MyTeam: {
        screen: MyTeam,
        navigationOptions:{
            title:'My Team'
        }

    },
    TeamManagement: {
        screen: TeamManagement,
        navigationOptions:{
            title:'Team Management',
        }
    },
    AddGroup:{
        screen:AddGroup,
        navigationOptions:{
            title:'Add Group',
        }
    },

    PhuotNews:{
        screen: PhuotNews,
        navigationOptions: {
            title: 'Tin tức'
        }
    },

    ReadNews:{
        screen: ReadNews,
    },

})

// export const PostStack = StackNavigator({
//     PostsDetails:{
//         screen: PostsDetails,
//     },
//     Post: {
//         screen: Post,
//         navigationOptions:{
//             title: 'Post'
//         }
//     }
// })

export default SlideMenu = DrawerNavigator(
    {
        menu: {
            screen: RouteStack
        },
        TouristAttraction: {
            screen: TouristAttraction,
        },
        GroupStack:{
            screen: GroupStack
        },
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