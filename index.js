import { AppRegistry } from 'react-native';
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

AppRegistry.registerComponent('MyPhuot', () => MyPhuot);
