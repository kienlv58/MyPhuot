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
import {TabBar} from "../../Routes";
import firebase from '../configs/firebaseconfig'
import { Rating } from 'react-native-elements';
import ViewMoreText from 'react-native-view-more-text';

export default class Details extends Component<{}>{

    constructor(props) {
        super(props);
        this.db = firebase.database();
    }

    render(){
        console.log("render component name")
        return(
            <View style={details.container}>
                <ScrollView contentContainerStyle={{borderWidth: 0, flex: 1}}>
                    <Slide array={this.props.navigation.state.params.images_slide}/>
                    <View style={details.title}>
                        <Text style={{fontSize:24, color:'white', fontWeight:'bold'}}>{this.props.navigation.state.params.name}</Text>
                        <ViewMoreText numberOfLines={2}
                                      renderViewMore={this.renderViewMore}
                                      renderViewLess={this.renderViewLess}>
                            <Text style={details.text}>{this.props.navigation.state.params.short_desc}</Text>
                        </ViewMoreText>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <Rating
                            type="star"
                            fractions={1}
                            imageSize={35}
                            startingValue={3.5}
                            onFinishRating={this.ratingCompleted}
                            style={{ marginTop:5, marginBottom: 5 }}
                        />
                    </View>
                    <TabBar/>
                </ScrollView>
            </View>
        );
    }

}

const details = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    title:{
        marginTop:10,
        backgroundColor:'deepskyblue',
        padding:5,
    },
    text:{
        color:'white',
        fontSize: 18,
    }
});
