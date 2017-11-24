import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';

import React,{Component} from 'react';
import TouristAttraction from './component/TouristAttraction';
import {RouteStack} from './Routes';
import {SlideMenu} from './Routes'

export class MyPhuot extends Component{
    render(){
        return(
            <SlideMenu/>
        );
    }
}

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
