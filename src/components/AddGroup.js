import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image} from 'react-native';
import firebase from '../configs/firebaseconfig';


export default class AddGroup extends Component {
    constructor(props) {
        super(props);
        this.itemRef = firebase.database().ref('team management');
        this.state = {
            isDateTimePickerVisible: false,
            avatarSource: '',
            groupName: "",
            description: '',
            leader: '',
            place: '',
            member: 0,
            startTime: "",
        }
        console.ignoredYellowBox = [
            'Setting a timer'
        ];
    }

    pushGroup() {
        this.itemRef.push({
            dateStart: this.state.startTime,
            description: this.state.description,
            leader: this.state.leader,
            name: this.state.groupName,
            tripName: this.state.place
        })
    }

    getGroupName() {
        Alert.alert(this.state.groupName);

    }


    validateInfo() {
        if (this.state.groupName.length < 1) {
            Alert.alert("Mời bạn nhập tên nhóm")
        }
        else if (this.state.description.length < 1) {
            Alert.alert("Mời bạn nhập mô tả nhóm")
        }
        else if (this.state.leader.length < 1) {
            Alert.alert("Mời bạn nhập trưởng nhóm")
        }
        else if (this.state.place.length < 1) {
            Alert.alert("Mời bạn nhập địa điểm")
        }
        else if (this.state.member.length < 1) {
            Alert.alert("Mời bạn nhập số thành viên")
        }
        else if (this.state.startTime.length < 1) {
            Alert.alert("Mời bạn nhập số thời gian xuất phát")
        }
        else {
            this.pushGroup();
            /*   Alert.alert("Đã thêm nhóm !")*/
            this.props.navigation.goBack()
        }
    }

    /*  mh1:
  <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('DetailsFolder', {dataShedule: item,stateReload:this.onReload})}}>
  mh2:
  navigation.goBack();
  navigation.state.params.stateReload(true);
  onReload = (stateReload) =>{
      if(stateReload){
      this.fetchData();
  }
  };*/

    render() {
        return (
            <View style={styles.containerColumn}>
                <View style={styles.childContainer}>
                    <TextInput style={styles.textInput} placeholder="Nhập tên nhóm "
                               placeholderTextColor={'#9a9a9a'}
                               onChangeText={(groupName) => this.setState({groupName})}
                               value={this.state.groupName}
                    />
                </View>
                <View style={styles.childContainer}>
                    <TextInput style={styles.textInput} placeholder="Mô tả nhóm " placeholderTextColor={'#9a9a9a'}
                               onChangeText={(description) => this.setState({description})}
                               value={this.state.description}
                    />
                </View>
                <View style={styles.childContainer}>
                    <TextInput style={styles.textInput} placeholder="Trưởng nhóm " placeholderTextColor={'#9a9a9a'}
                               onChangeText={(leader) => this.setState({leader})}
                               value={this.state.leader}

                    />
                </View>
                <View style={styles.childContainer}>
                    <TextInput style={styles.textInput} placeholder="Địa điểm"
                               placeholderTextColor={'#9a9a9a'}
                               onChangeText={(place) => this.setState({place})}
                               value={this.state.place}
                    />
                </View>
                <View style={styles.childContainer}>
                    <TextInput style={styles.textInput} placeholder="Số lượng thành viên "
                               placeholderTextColor={'#9a9a9a'}
                               onChangeText={(member) => this.setState({member})}
                               value={this.state.member}
                    />
                </View>
                <View style={styles.childContainer}>
                    <TextInput style={styles.textInput} placeholder="Thời gian xuất phát "
                               placeholderTextColor={'#9a9a9a'}
                               onChangeText={(startTime) => this.setState({startTime})}
                               value={this.state.startTime}
                    />
                </View>
                <View style={{flex: 1.1, flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{paddingLeft: 7, flex: 2}}><Text style={{fontWeight: 'bold'}}>Ảnh đại diện nhóm </Text></View>
                    <TouchableOpacity style={{flex: 0.75}} onPress={()=>{this.showImagePicker()}}>
                        <Image source={require('../images/icon_none_image_color.png')}/>

                    </TouchableOpacity>


                    <View style={{flex: 1}}></View>

                </View>


                <TouchableOpacity style={{flex: 0.75}} onPress={() => {
                    this.validateInfo();
                }}>
                    <View style={styles.boxShadow}>
                        <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 21}}>THÊM</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flex: 0.5}}></View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    containerColumn: {
        flex: 1, flexDirection: 'column',
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: '#ffffff',
        padding: 15
    },

    childContainer: {
        flex: 1, flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    textInput: {
        flex: 1,
        paddingLeft: 7,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#ff9749'
    },
    textValidate: {
        flex: 0.2,
        color: '#ff1a3a',
        fontSize: 11

    },
    boxShadow: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#5d5d5d',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        backgroundColor: '#ff9749',
        justifyContent: 'center',
        alignItems: 'center'
    },
    thumbnailGroup: {},
    childContainer: {
        flex: 0.7, flexDirection: 'row', alignItems: 'center',
        marginBottom: 5
    }
})