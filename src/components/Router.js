import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {TabNavigator} from 'react-navigation'
import Member from "./Screen/Member";
import Schedule from "./Screen/Schedule";
import Cost from "./Screen/Cost";

export const TabBarGroupManager = TabNavigator({
    Member: {
        screen: Member,
        navigationOptions: {
            tabBarLabel: 'Thành Viên',
            tabBarIcon: () => (
                <Image
                    source={require('../images/icon_member.png')}
                    style={{width: 27, height: 27}}
                />
            ),
        }
    },
    Schedule: {
        screen: Schedule,
        navigationOptions: {
            tabBarLabel: 'Lịch Trình',
            tabBarIcon: () => (
                <Image
                    source={require('../images/icon_schedule.png')}
                    style={{width: 27, height: 27}}
                />
            ),

        }
    },
    Cost: {
        screen: Cost,
        navigationOptions: {
            tabBarLabel: 'Chi Phí',
            tabBarIcon: () => (
                <Image
                    source={require('../images/icon_cost.png')}
                    style={{width: 27, height: 27}}
                />
            ),
        }
    },
}, {
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
        upperCaseLabel: false,
        showIcon: true,
        activeTintColor: '#3785ff',
        inactiveTintColor: '#050302',
        indicatorStyle: {
            backgroundColor: '#3785ff'
        },
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: '#ffffff',
        },
    }
});
