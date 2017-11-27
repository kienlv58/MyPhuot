/**
 * Created by kien.lovan on 11/23/2017.
 */
import React, {Component} from 'react'
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';

import SideBar from "../component/SideBar";
import TestFirebase from "../component/testfirebase";
import Home from './Home'

export const RouteStack = StackNavigator({
    Home: {
        screen: Home,
    }
})

const SideMenu = DrawerNavigator({
    HomeScreen: {
        screen: RouteStack
    }
}, {
    drawerWidth: 500,
    drawerHeight: 250,
    drawerPosition: "left",
    contentComponent: props => <SideBar {...props}/>
});

export default SideMenu;