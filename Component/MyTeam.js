import React, {Component} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity, Text, Image, Alert, FlatList} from 'react-native';
import {firebaseApp} from "./FirebaseConfig";
export default class MyTeam extends Component {
    constructor(props) {
        super(props);
        this.itemRef = firebaseApp.database().ref('team management')
        this.state = {
            arrGroup: [],
            searchText: "",
        }
        console.ignoredYellowBox = [
            'Setting a timer'
        ];
    }
    searchGroup() {
        if (this.state.searchText.length < 1) {
            this.getData()
        }
        else {
            let a = this.itemRef;
            a.on('value', (dataSnapshot) => {
                var arrGroup = [];
                dataSnapshot.forEach((itemChild) => {
                    if (itemChild.val().name == this.state.searchText) {
                        arrGroup.push({
                            key: itemChild.key,
                            dateStart: itemChild.val().dateStart,
                            leader: itemChild.val().leader,
                            groupName: itemChild.val().name,
                            tripName: itemChild.val().tripName,
                        })
                    }
                })
                this.setState({
                    arrGroup: arrGroup
                });
            })
        }
    }

    componentWillMount() {
        this.getData()
    }

    getData = async () => {

        let a = await this.itemRef;
        a.on('value', (dataSnapshot) => {
            var arrGroup = [];
            dataSnapshot.forEach((itemChild) => {
                arrGroup.push({
                    key: itemChild.key,
                    dateStart: itemChild.val().dateStart,
                    leader: itemChild.val().leader,
                    groupName: itemChild.val().name,
                    tripName: itemChild.val().tripName,
                })
            })
            this.setState({
                arrGroup: arrGroup
            });
            var i = 0;
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.childContainer}>
                    <View style={{flex: 3}}/>


                    <View style={styles.header}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Nhập tên đội cần tìm"
                            tintColor={"blue"}
                            underlineColorAndroid={'transparent'}
                            placeholderTextColor={'#cbcbcb'}
                            onChangeText={(searchText) => this.setState({searchText})}
                            value={this.state.searchText}
                        />

                        <TouchableOpacity style={styles.searchButton} onPress={() => {
                            this.searchGroup()
                        }}>
                            <Image
                                style={{width: 25, height: 25}}
                                source={require('./image/icon_search.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.banner}>
                    <Text style={{
                        flex: 1.5,
                        color: '#ffffff',
                        fontWeight: 'bold',
                        paddingLeft: 15,
                        backgroundColor: '#ff9749'
                    }}>Đội đã tham gia</Text>
                    <View style={{flex: 2}}/>

                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('AddGroup')
                    }} style={styles.addButtonShadow

                    }>
                        <Text style={{color: '#ff9749'}}>Tạo mới</Text>
                        <Image
                            style={{width: 16, height: 16}}
                            source={require('./image/icon_add_orange.png')}
                        />
                    </TouchableOpacity>
                    <View style={{flex: 0.3}}/>
                </View>
                <View style={{flex: 8, backgroundColor: '#FFF'}}>
                    <FlatList
                        data={this.state.arrGroup}
                        renderItem={({item}) =>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('TeamManagement', {
                                    leader: item.leader,
                                    tripName: item.tripName,
                                    groupName: item.groupName
                                })
                            }}>
                                <View style={{flexDirection: 'row', padding: 10}}>
                                    <View style={{flex: 1}}>
                                        <Image source={require('./image/icon_none_image_color.png')}/>
                                    </View>
                                    <View style={{flex: 3, flexDirection: 'column'}}>
                                        <Text style={{fontWeight: 'bold'}}>{item.groupName}</Text>
                                        <Text>Địa điểm : {item.tripName}</Text>
                                        <Text>Ngày khởi hành : {item.dateStart}</Text>
                                    </View>
                                    <View style={{
                                        flex: 0.5,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Image source={require('./image/icon_next.png')}/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </View>
            </View>
        )
            ;
    }
}
const styles = StyleSheet.create(
    {
        container: {flex: 1, flexDirection: 'column', backgroundColor: '#e8e8e8'},
        childContainer: {
            flex: 1.5,
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#ffffff',
            paddingRight: 7,
            marginTop: 5,
            marginBottom: 5
        },
        header: {
            flex: 4,
            height: 43,
            borderWidth: 5,
            flexDirection: 'row',
            borderColor: '#ff9749',
            borderRadius: 3,
            alignItems: 'center',
        },
        searchInput: {height: 40, flex: 1, paddingLeft: 13, color: '#696969', backgroundColor: '#FFF'},

        searchButton: {
            flex: 0.2,
            height: 37,
            borderBottomRightRadius: 3,
            borderTopRightRadius: 3,
            backgroundColor: '#ff9749',
            alignItems: 'center',
            justifyContent: 'center'
        },
        banner: {
            flex: 0.75,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            paddingTop: 7,
            paddingBottom: 7,
            marginBottom: 5
        },
        addButtonShadow: {
            shadowColor: '#5d5d5d',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            flexDirection: 'row',
            flex: 1,
            height: 35,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: '#ff9749',
            borderRadius: 15
        }
    }
)

