import { AppRegistry } from 'react-native';
import App from './App';
import React,{Component} from 'react';
import TouristAttraction from './component/TouristAttraction';
import {RouteStack} from './Routes';
import Home from './component/Home'

export class MyPhuot extends Component{
    render(){
        return(
            <RouteStack/>
        );
    }
}

AppRegistry.registerComponent('MyPhuot', () => MyPhuot);
