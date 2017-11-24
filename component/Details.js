import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import Slide from './Slide'
import firebase from '../config/firebaseconfig'

export default class Details extends Component<{}>{

    constructor(props) {
        super(props);
        this.db = firebase.database();
    }

    render(){
        let star = {
            uri: 'http://www.potters.com.au/wp-content/uploads/2017/09/five-stars.png'
        }
        return(
            <View style={details.container}>
                <ScrollView>
                    <Slide array={this.props.navigation.state.params.images_slide}/>
                    <View style={details.title}>
                        <Text style={{fontSize:18, color:'white', fontWeight:'bold'}}>{this.props.navigation.state.params.name}</Text>
                        <Text style={details.text}>{this.props.navigation.state.params.short_desc}</Text>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <Image source={star} style={{height:50, width:200}}></Image>
                    </View>
                </ScrollView>
            </View>
        );
    }

}

const details = StyleSheet.create({
    container: {
        flex: 1,
    },
    title:{
        backgroundColor:'deepskyblue',
        padding:5,
        height: 70
    },
    text:{
        color:'white',
        fontSize: 16,
    }
});
