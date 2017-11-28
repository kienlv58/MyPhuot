import React, {Component} from 'react';
import {} from 'react-native';
import MyTeam from './MyTeam';
import {StackNavigator} from 'react-navigation';
import AddGroup from './AddGroup';
import TeamManagement from './TeamManagement';
export const GroupStack = StackNavigator({
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
});