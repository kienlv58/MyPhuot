import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {TabBarGroupManager} from "./Router";

export default class TeamManagement extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.childContainer
                }>
                    <View style={styles.groupInfo}>
                        <Text style={{fontWeight: 'bold'}}>{this.props.navigation.state.params.groupName}</Text></View>
                    <Text style={{flex: 1,}}>Trưởng Nhóm : {this.props.navigation.state.params.leader}</Text>
                    <Text style={{flex: 1,}}>Thủ Quỹ : </Text>
                    <Text style={{flex: 1,}}>Chuyến Đi : {this.props.navigation.state.params.tripName}</Text>
                </View>
                <View style={{flex: 7}}>
                    <TabBarGroupManager/>
                </View>


            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, flexDirection: 'column', backgroundColor: '#1f7aff'
    },
    childContainer: {
        flex: 2, flexDirection: 'column', backgroundColor: '#ffffff', paddingTop: 11,
        marginBottom: 3,
        paddingLeft: 7
    },
    groupInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    }
})