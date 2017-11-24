/**
 * Created by kien.lovan on 11/23/2017.
 */
import React, {Component} from 'react'
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';

import SideBar from "../component/SideBar";
import TestFirebase from "../component/testfirebase";
const SideMenu = DrawerNavigator({
    HomeScreen: {
        screen: TestFirebase
    }
}, {
    drawerWidth: 500,
    drawerHeight: 250,
    drawerPosition: "left",
    contentComponent: props => <SideBar {...props}/>
});

export default SideMenu;