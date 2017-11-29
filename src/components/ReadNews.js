import React, {Component} from 'react'
import {
    View,
    Image,
    ScrollView,
    Text,
    StyleSheet
} from 'react-native'
import {widthScreen} from "../utils/Dimen";

export default class ReadNews extends Component {
    constructor(props) {
        super(props);
        console.ignoredYellowBox = [
            'Setting a timer'
        ];
    }
    render() {
        console.log("render component name");
        return (
            <View style={readNewsStyle.viewParent}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={readNewsStyle.styleTitle}>
                            {this.props.navigation.state.params.title}
                        </Text>
                        <Image style={readNewsStyle.styleImage}
                               source={{uri: this.props.navigation.state.params.image}}/>
                    </View>
                    <Text style={readNewsStyle.styleContent}>
                        {this.props.navigation.state.params.content}
                    </Text>

                </ScrollView>
            </View>
        );
    }
}

var readNewsStyle = StyleSheet.create({
    viewParent: {
        padding:16,
        flex: 1,
    },
    styleTitle: {
        color: 'red',
        fontSize: 35,
        fontWeight: 'bold',
    },

    styleImage: {
        marginTop:16,
        marginBottom:16,
        width: widthScreen,
        height: widthScreen * 0.49,
    },

    styleContent: {
        color:'green',
        fontSize:20
    }
})