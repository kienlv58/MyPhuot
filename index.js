import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import MyTeam from './Component/MyTeam';
import {TabBarGroupManager} from './Component/Router';
import TeamManagement from './Component/TeamManagement';
import {GroupStack} from "./Component/RouterGroup";
export class MyPhuot extends Component {
    render() {
        return (
            <GroupStack/>      )
    }
}
AppRegistry.registerComponent('MyPhuot', () => MyPhuot);
